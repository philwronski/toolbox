
const platforms = [
  {
      label: 'Usine 1',
      url: 'https://usine1-www.test-oui.sncf/commande/panier',
      configUrl: 'http://usine1-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Usine 2',
      url: 'https://usine2-www.test-oui.sncf/commande/panier',
      configUrl: 'https://usine2-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Usine 3',
      url: 'https://usine3-www.test-oui.sncf/commande/panier',
      configUrl: 'https://usine3-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Usine 4',
      url: 'https://usine4-www.test-oui.sncf/commande/panier',
      configUrl: 'https://usine4-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Intégration 4',
      url: 'https://integration4-www.test-oui.sncf/commande/panier',
      configUrl: 'https://integration4-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Recette 1',
      url: 'https://recette1-www.test-oui.sncf/commande/panier',
      configUrl: 'https://recette1-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Recette 2',
      url: 'https://recette2-www.test-oui.sncf/commande/panier',
      configUrl: 'https://recette2-www.test-oui.sncf/cart/admin/configprops'
  },
  {
      label: 'Recette 3',
      url: 'https://recette3-www.test-oui.sncf/commande/panier',
      configUrl: 'https://recette3-www.test-oui.sncf/cart/admin/configprops'
  },
];

const getCurrentConfig = (platform) => {
  return fetch(platform.configUrl)
      .then(response => response.json())
      .then(extractCurrentConfig)
      .catch(() => UNKNOWN);
};

const extractCurrentConfig = (json) => {
  try {
      console.log(json);
      const beans = json.contexts['application-1'].beans;
      return {
          reservation: beans.reservationProperties.properties.eligibility,
          cart: beans.cartProperties.properties.eligibility,
          finalization: beans.frontProperties.properties.finalizationStatus,
      };
  } catch (e) {
      console.error(e);
      return UNKNOWN;
  }
};

const display = (platform) => {
  const config = getCurrentConfig(platform);
  return (
    <li>
      <span>{config.reservation}</span>
      <span>{config.cart}</span>
      <span>{config.finalization}</span>
    </li>
  )
};
