<template>
  <section>
    <header class="header">
      <nav>
        <ol>
          <li><a @click="goto('vuecli', '/vuecli')">vuecli</a></li> 
          <li><a @click="goto('creatreactapp', '/creatreactapp')">create-react-app</a></li> 
          <li><a @click="goto('ejectreact', '/ejectreact')">eject-react</a></li> 
          <li><a @click="goto('reactwebpack', '/reactwebpack')">react-webpack</a></li>
        </ol>
      </nav>
    </header>
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </section>
</template>

<script>
	export default {
		name: 'framework',
		props: {
			loading: Boolean,
			content: String,
		},
		methods: {
			goto(title, href) {
				window.history.pushState({}, title, href);
			},
		},
	};
</script>

<style scoped>
  .header {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;

    > nav > ol {
      margin: 0;
      font-size: 14px;
      color: blue;
      display: flex;
      flex-direction: column;
      padding: 0;

      > li {
        box-sizing: content-box;
        line-height: 20px;
        font-variant: tabular-nums;
        font-feature-settings: "tnum";
        list-style: decimal;
        padding: 0;
        margin: 0;
      }

      a {
        color: blue;
        text-decoration-line: underline;
      }
    }
  }

  .appContainer {
    margin-top: 50px;
  }
</style>
