import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrent } from '../actions/cardActions';

const CardItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className='card bg-light'>
      <div className='column-1'>
        {data.image ? (
          <img src={data.image} alt='' className='round-img' />
        ) : (
          <h1 className='name__image'>{data.name}</h1>
        )}
      </div>
      <div className='column-2'>
        <h1 className='name'>{data.name}</h1>
        <p>
          {' '}
          <i
            style={{ marginLeft: '25px', marginRight: '10px' }}
            className='far fa-envelope fa-1x'
          ></i>{' '}
          {data.email}
        </p>
        <p>
          <i
            style={{ marginLeft: '25px', marginRight: '10px' }}
            className='far fa-address-book'
          ></i>
          {data.address}
        </p>
        <p>
          <i
            style={{ marginLeft: '25px', marginRight: '10px' }}
            className='fas fa-phone'
          ></i>
          {data.phone}
        </p>

        <div>
          {
            <a
              className='link'
              href={`http://${data.website}`}
              
            >
              <i
                style={{ marginLeft: '25px', marginRight: '10px' }}
                className='fas fa-globe fa-1x'
              ></i>{' '}
              {data.website}
            </a>
          }
        </div>
        {
          <Link className='button__click' to={`/${data.id}`}>
            View Profile
          </Link>
        }
        {
          <Link to={`/${data.id}/edit-card`}>
            <button
              className='button__click'
              onClick={() => dispatch(setCurrent(data))}
            >
              Edit Profile
            </button>
          </Link>
        }
        <div className='logo'>
          <i
            className='fab fa-accusoft fa-2x'
            style={{ marginLeft: '25px', marginRight: '10px' }}
          />
          <div className='logo__text'>
            <b style={{ fontSize: '15px' }}>Mckenzie LLC</b>
            <p style={{ marginTop: '-5px', fontStyle: 'italic' }}>
              Quality-focused value-added synergy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
