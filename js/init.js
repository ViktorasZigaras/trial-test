
import { setup } from './setup.js';

const init = () => {
    console.log('init');
    console.log(setup);
    // mainDom can be imagined as "parent" main component in React, a state-ful one
    const mainDom = document.querySelector('#main');
    setup.forEach(item => {
        // newItemDom can be then imagined as "child" components with no or little state functionality in React
        const itemDom = document.createElement('div');
        // following class manipulations could probably be done better, but I need time to optimize this code better
        const menuItemSizes = 'menu-item col-xs-12 col-sm-6 col-md-4';
        itemDom.className = menuItemSizes + ' show';
        itemDom.addEventListener('click', () => {
            console.log(item.title);
            if (itemDom.className == menuItemSizes + ' show') {
                itemDom.className = menuItemSizes + ' obscure';
            } else {
                itemDom.className = menuItemSizes + ' show';
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
            subsections += `
                <div class="menu-item-subsection col-sm-6">
                    <p class="menu-item-details subsection ${position}">
                        ${innerItem.title}
                    </p>
                </div>
            `;
        });
        let itemHTML = `
            <div class="menu-item-margins col-sm-12">
                <div class="menu-item-body col-sm-12">
                    <p class="menu-item-details title">${item.title}</p>
                    <p class="menu-item-details value">${item.value}</p>
                    <p class="menu-item-details decription">${item.decription}</p>
                    <div class="menu-item-subsection-container col-sm-12">
                        ${subsections}
                    </div>
                </div>
            </div>
        `;
        itemDom.innerHTML = itemHTML;
        mainDom.appendChild(itemDom);
    });
};

init();