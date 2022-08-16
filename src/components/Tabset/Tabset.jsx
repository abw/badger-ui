import React from 'react'
import { useState } from 'react';
import Storage from '../../utils/Storage'
import Icon from '../Icon';

const Tabset = ({
  tabs,
  storageKey,
  tabsetClass="tabset",
  tabClass="tab",
  activeClass="active",
  visibleClass="visible",
  hiddenClass="hidden",
  className="",
}) => {
  let state = { active: 0 };
  let store;

  if (storageKey) {
    store = Storage(storageKey);
    state = store.load(state);
  }
  if (state.active > tabs.length - 1) {
    state.active = 0;
  }

  const [active, setActive] = useState(state.active);
  const activateTab = n => {
    setActive(n);
    if (store) {
      store.save({ active: n });
    }
  }

  return <div className={`${tabsetClass} ${className}`}>
    <div className="head">
    { tabs.map(
        (tab, n) =>
          <a key={n} className={n==active ? `${activeClass} ${tabClass}` : tabClass} onClick={() => activateTab(n)}>
            {tab.icon && <Icon icon={tab.icon} fixedWidth />}
            {tab.iconLeft && <Icon icon={tab.iconLeft} className="on-left" fixedWidth />}
            {tab.text && <span className="caption">{tab.text}</span>}
            {tab.iconRight && <Icon icon={tab.iconRight} className="on-right" fixedWidth />}
          </a>
      )
    }
    </div>
    <div className="body">
      { tabs.map(
          (tab, n) => {
            const TabComponent = tab.component;
            return <div key={n} className={n==active ? visibleClass : hiddenClass}>
              {tab.content}
            </div>
          }
      )}
    </div>
  </div>
}

export default Tabset;
