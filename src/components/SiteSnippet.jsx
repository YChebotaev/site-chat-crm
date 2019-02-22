import React, { useState } from "react";
import { Button, Input } from "reactstrap";
import { withRouter } from "react-router";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const SiteSnippet = withRouter(({ match: { params } }) => {
  const [copied, setCopied] = useState(false);

  const snippet = `<script
  data-sc-options
  data-chat-id="${params.siteId}"
  src="js/site-chat.js"
  type="text/javascript">
</script>`;

  const handleChange = e => {
    e.preventDefault();
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <>
      Put code below before <code>&lt;/head&gt;</code> tag on the page:
      <Input tag="textarea" rows={8} value={snippet} onChange={handleChange} />
      <br />
      <CopyToClipboard text={snippet}>
        <Button color="primary" onClick={handleCopy} disabled={copied}>
          Save to clipboard
        </Button>
      </CopyToClipboard>
    </>
  );
});
