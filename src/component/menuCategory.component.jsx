import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { menu } from '../data/menu';
import {Link } from 'react-router-dom';
import '../style/menuItemcategory.css';

const MenuItemCategory = ({ props, dishItem }) => {
  const { category } = useParams();
  useEffect(() => {}, [category]);

  const chooseItemMenue = (food, dishh) => {
    menu
      .filter((dish) => dish.category === category)
      .forEach((element) => {
        element.menu[dishh].filter((e) =>
          e.item === food ? (e.choose = '1') : ''
        );
      });

    console.log(menu[0].menu.first[0]);
    console.log(menu[0].menu.main[1]);
  };

  return (
    <div className="menu-item-category">
      <b className="menu-item-category-title">{dishItem}:</b>
      <br />
      {props.map((e) => (
        <label
          className="menu-item-category-label"
          onClick={() => chooseItemMenue(e.item, dishItem)}
        >
          <input value={e.item} type="checkbox" />
          <span className="menu-item-category-span">{e.item}</span>
        </label>
      ))}
    </div>
  );
};

export const MenuCategory = () => {
  const { category } = useParams();

  useEffect(() => {}, [category]);

  const [submit, setSubmit] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const onSubmit = () => {
    let arr = [];
    let c = 0;
    menu.map((element) => {
      if (element.category === category) {
        element.disdMenu.map((e) => {
          menu
            .filter((dish) => dish.category === category)
            .forEach((element) => {
              element.menu[e].filter((e) =>
                e.choose === '1' ? (arr[c++] = e.item) : ''
              );
            });
        });
      }
    });

    setSelectedItems(arr);
    setSubmit(true);
  
  };

  return (
    <div>
      {menu.map((element) => {
        if (element.category === category) {
          return element.disdMenu.map((e) => {
            console.log(element.category + 'element category');
            return (
              <MenuItemCategory props={element.menu[e]} dishItem={e} />
            );
          });
        }
      })}
      {/* <button type="submit" onClick={onSubmit}>
        submit the order
        <Link to={'submit'} selectedItems={selectedItems}></Link>
      </button>
      {/* {submit === true && (
      // <Link to={'/menu/submit'} selectedItems={selectedItems}></Link>
        // <ConfirmationPage >
      )} */} 
     {/* <Link to={{ pathname: '/menu/submit', state: { selectedItems } }}>
        <button type="submit" onClick={onSubmit}>
          Submit the order
        </button>
      </Link> */}


<Link to="/menu/submit" >
  <button type="submit" onClick={onSubmit}>
    submit the order
  </button>
</Link>

    </div>
  );
};



 

