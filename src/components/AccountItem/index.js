import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from "classnames/bind";
import style from './AccountItem.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img  className={cx('avatar')} src="" alt="Hoa" />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Ngueyn a</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}> hoa nguyen </span>

            </div>
        </div>
    )
}

export default AccountItem;
