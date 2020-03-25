import htm from "https://unpkg.com/htm?module";

const html = htm.bind(h);

// Preview component for a Page
const Page = createClass({
  render() {
    const entry = this.props.entry;

    return html`
      <main property="mainContentOfPage" class="container" typeof="WebPageElement">
        ${this.props.widgetFor("intro")}
        <span> [PLACE HOLDER - Table of Contents will generate here] </span>
        ${this.props.widgetFor("body")}
      </main>
    `;
  }
});

export default Page;
