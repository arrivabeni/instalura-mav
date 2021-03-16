import React from 'react';
import { Box } from '../src/components/foundation/layout/Box';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function PageSobre() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
    >
      Página Sobre
    </Box>
  );
}

export default websitePageHOC(PageSobre, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Sobre',
    },
  },
});
