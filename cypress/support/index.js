// cypress/support/index.js

// Deshabilita fetch antes de que se cargue la ventana
/* Cypress.on('window:before:load', (win) => {
    win.fetch = null; // Deshabilita fetch si es un problema conocido
    cy.stub(win, 'fetch').callsFake((...args) => {
        const [url] = args;
        if (url.includes('backtrace.io')) {
            return Promise.resolve({
                ok: true, json: () => Promise.resolve({

                })
            });
        }
        return win.fetch.wrappedMethod(...args);
    });
}); */
//  REALMENTE YA NO SE QUE HACER EN ESA PAGINA PARA PODER HACER VISIT DOS VECES SEGUIDAS SIN TENER QUE
//  SI O SI MANUALMENTE BORRAR LOS DATOS, ME RESULTA INEXPLICABLE COMO FALLA UN VISIT.


/* Cypress.on('window:before:load', (win) => {
    // Interceptar fetch y ajustar las configuraciones de CORS
    const originalFetch = win.fetch;
    win.fetch = (...args) => {
        const [resource, config] = args;
        if (resource.includes('backtrace.io')) {
            const newConfig = { ...config, mode: 'no-cors' };
            return originalFetch(resource, newConfig);
        }
        return originalFetch(...args);
    };
}); */

// Otros comandos o configuraciones pueden ir aquí
