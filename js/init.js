
import { setup } from './setup.js';

const init = () => {
    console.log('init');
    console.log(setup);
    // mainDom can be imagined as "parent" main component in React, a state-ful one
    const mainDom = document.querySelector('#main');
    setup.forEach(item => {
        // newItemDom can be then imagined as "child" components with no or little state functionality in React
        const itemDom = document.createElement('div');
        itemDom.className = 'menu-item-grid show';
        itemDom.addEventListener('click', () => {
            console.log(item.title);
            if (itemDom.className == 'menu-item-grid show') {
                itemDom.className = 'menu-item-grid obscure';
            } else {
                itemDom.className = 'menu-item-grid show';
            }
        });
        let subsections = '';
        item.subsections.forEach((innerItem, index) => {
            let position = '';
            const indexPosition = index % 4;
            if (index == 0) {
                position = 'dark';
            } else if (indexPosition == 1 || indexPosition == 2) {
                position = 'light';
            } else if (indexPosition == 3 || indexPosition == 0) {
                position = 'dark';
            }
            subsections += `<p class="menu-item-details subsection ${position}">${innerItem.title}</p>`;
        });
        let itemHTML = `
            <div class="menu-item col-sm-4">
                <p class="menu-item-details title">${item.title}</p>
                <p class="menu-item-details value">${item.value}</p>
                <p class="menu-item-details decription">${item.decription}</p>
                <div class="menu-item-subsections">
                    ${subsections}
                </div>
            </div>
        `;
        itemDom.innerHTML = itemHTML;
        mainDom.appendChild(itemDom);
    });
};

init();