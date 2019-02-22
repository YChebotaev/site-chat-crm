import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { ShowError } from "../components/ShowError";
import { withRouter } from "react-router";
import { useSite } from "../hooks/useSite";
import { useField } from "../hooks/useField";

export const SiteEditForm = withRouter(({ match: { params } }) => {
  const [site, saveSite, loading] = useSite(params.siteId);
  
  if (loading) {
    return null;
  }

  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [domain, handleChangeDomain] = useField(site.domain);

  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      await saveSite({
        domain
      });
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Form className="SiteEditForm" onSubmit={handleSubmit}>
      <ShowError error={error} />
      <FormGroup>
        <Label for="domain">Domain</Label>
        <Input
          type="text"
          name="domain"
          placeholder="example.com"
          value={domain}
          onChange={handleChangeDomain}
          disabled={pending}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" disabled={pending}>
          Save
        </Button>
      </FormGroup>
    </Form>
  );
});
