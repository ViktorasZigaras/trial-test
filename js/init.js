
import { setup } from './setup.js';

const init = () => {
    console.log('init');
    console.log(setup);
    // mainDom can be imagined as "parent" main component in React, a state-ful one
    const mainDom = document.querySelector('#main');
    // mainDom.innerHTML = 'aaaa';
    // const testDom = document.createElement('div');
    setup.forEach(item => {
        // newItemDom can be then imagined as "child" components with no or little state functionality in React
        const newItemDom = document.createElement('div');
        newItemDom.className = 'menu-item';

        const textIdDom = document.createElement('p');
        textIdDom.innerText = item.id;
        newItemDom.appendChild(textIdDom);

        const textTitleDom = document.createElement('p');
        textTitleDom.innerText = item.title;
        newItemDom.appendChild(textTitleDom);

        const textValueDom = document.createElement('p');
        textValueDom.innerText = item.value;
        newItemDom.appendChild(textValueDom);

        const textDecriptionDom = document.createElement('p');
        textDecriptionDom.innerText = item.decription;
        newItemDom.appendChild(textDecriptionDom);

        // subsections
        item.subsections.forEach(innerItem => {
            const textDom = document.createElement('p');
            textDom.innerText = innerItem.title;
            newItemDom.appendChild(textDom);
        });

        newItemDom.addEventListener('click', () => {
            console.log(item.title);
        })

        mainDom.appendChild(newItemDom);
    });
    
    
};

init();

// total W: 787, H: 725.6
// item W: 213, H: 307.4, padding: L, R: 52.3, inner: 368.1 - 307.4 - 39.8 (padding - T, B)