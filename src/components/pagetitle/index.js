import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageTitle = (props) => {
  return (
    <section className="page-title" style={{ ...(props?.img ? { backgroundImage: `url(${process.env.REACT_APP_SERVER_API}/${props?.img})` } : { backgroundImage: `url(https://picsum.photos/id/10/838/390)` }) }}>
      <div className="container">
        <div className="row">
          <div className="col col-xs-12">
            <h2>{props.pageTitle}</h2>
            <ol className="breadcrumb">
              <li>
                <Link to="/home">Главная</Link>
              </li>
              <li>
                <span>{props.pagesub}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
