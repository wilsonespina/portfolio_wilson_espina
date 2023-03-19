import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
// import { faHatCowboy } from '@fortawesome/pro-thin-svg-icons'
// import { faHatChef } from '@fortawesome/sharp-solid-svg-icons'
// import { faPlateUtensils } from '@fortawesome/sharp-regular-svg-icons'

import App from './app/app';

// library.add(fas)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
