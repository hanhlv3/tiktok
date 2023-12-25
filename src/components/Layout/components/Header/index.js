import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';

import 'tippy.js/dist/tippy.css'; // optional
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />

                {/** Search */}
                <Tippy
                    visible={true}
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('search-result')} {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input type="text" placeholder="Search account and video" spellCheck={false} />
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
                </Tippy>

                {/** Action */}
                <div className={cx('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
