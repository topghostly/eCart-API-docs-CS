import React from "react";
import styled from "styled-components";

import Feedback from "../../utils/Feedback";
function Authentication() {
  return (
    <Section>
      <Header>Authentication</Header>
      <Para>
        The eCart API is organized around REST principles. It provides a way to
        retrieve data from various e-commerce websites, such as Jiji and Jumia
        (currently). The API offers predictable resource-oriented URLs, returns
        JSON-encoded responses, and utilizes standard HTTP response codes,
        authentication, and HTTP verbs.
      </Para>
      <Para>
        The API supports RESTful requests, and the base URL for all requests is{" "}
        <code>***Remeber to put base URL***</code>. You should include your API
        key in the headers of your requests for authentication.
      </Para>
      <Para>
        The eCart API evolves over time, and new versions may be released to
        tailor functionality. Always refer to the latest documentation for your
        specific version of the API.
      </Para>
      <Feedback />
    </Section>
  );
}

const Section = styled.div`
  position: relative;
  width: 100%;
  padding: var(--big-margin);
  border-bottom: solid 1px #e6e6e6;
`;

const Header = styled.div`
  font-size: var(--header-font-size);
  font-family: var(--header-font-family);
  margin-bottom: var(--small-margin);
  color: var(--theme-color);
`;
const Para = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: var(--small-margin);
`;
export default Authentication;
