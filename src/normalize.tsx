import { createGlobalStyle } from "styled-components";

const NormalizeCSS = createGlobalStyle`
    ${process.env.NORMALIZE_BUILD_CONTENTS}
`;

export default NormalizeCSS;
