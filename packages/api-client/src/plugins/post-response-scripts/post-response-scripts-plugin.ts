import { type TestResult, executePostResponseScript } from '@/libs/execute-scripts'
import type { ApiClientPlugin } from '@/plugins/plugin-manager'
import { TestResults } from '@/plugins/post-response-scripts/components/TestResults'
import { ref } from 'vue'
import { PostResponseScripts } from './components/PostResponseScripts'

export const postResponseScriptsPlugin: ApiClientPlugin = () => {
  const results = ref<TestResult[]>([])

  return {
    name: 'post-response-scripts',
    views: {
      'request.section': [
        {
          title: 'Scripts',
          component: PostResponseScripts,
        },
      ],
      'response.section': [
        {
          title: 'Tests',
          component: TestResults,
          props: {
            results,
          },
        },
      ],
    },
    hooks: {
      // Reset test results when a new request is sent
      async onBeforeRequest() {
        results.value = []
      },
      // Execute post-response scripts when a response is received
      async onResponseReceived({ response, operation }) {
        await executePostResponseScript(operation['x-post-response'], {
          response,
          onTestResultsUpdate: (newResults) => (results.value = [...newResults]),
        })
      },
    },
  }
}
