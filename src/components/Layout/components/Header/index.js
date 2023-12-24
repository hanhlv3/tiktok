import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok" />
        </div>
        { /** Search */ }
        <div className={cx('search')}>
          <input 
            type="text"
            placeholder='Search account and video' 
            spellCheck={false}
          />
          <button className={cx('clear')}>
            {/** clear */}
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
            {/** loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('search-btn')}>
            {/** search */}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        { /** Action */ }
        <div className={cx('actions')}>

        </div>

      </div>
    </header>
  );
}

export default Header;
