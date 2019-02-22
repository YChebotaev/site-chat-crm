import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { ShowError } from "../components/ShowError";
import { withRouter } from "react-router";
import { useField } from "../hooks/useField";
import { useAddSite } from "../hooks/useAddSite";

export const SiteCreateForm = withRouter(({ history }) => {
  const [addSite] = useAddSite();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
  const [domain, handleChangeDomain] = useField("");

  const handleSubmit = async e => {
    e.preventDefault();
    setPending(true);
    setError(null);
    try {
      const site = await addSite({
        domain
      });
      history.replace(`/sites/${site.id}/edit`);
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
