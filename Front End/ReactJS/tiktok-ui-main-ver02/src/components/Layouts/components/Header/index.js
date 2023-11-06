// libs
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

// layouts
import styles from './Header.module.scss';
import images from '~/assets/images';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles); // bind object styles tra ve 1 function cx

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        tilte: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        tilte: 'Feedback and help',
        to: '/feeback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        tilte: 'Keyboard shortcuts',
    },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            // setSearchResult([1, 2, 3]);
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                {/* search */}
                {/* tool tip - hiện chữ nhỏ khi hover search-btn */}
                {/* placement: vị trí */}
                <Tippy
                    // điều kiện để hiển thị danh sách kết quả tìm kiếm
                    visible={searchResult.length > 0}
                    interactive={true}
                    render={(attrs) => (
                        <PopperWrapper>
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </div>
                        </PopperWrapper>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        {/* Loading */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            {/* Search */}
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                {/* Action - nam ben phai thanh search */}
                <div className={cx('actions')}>
                    {/* Upload */}
                    <Button text>Upload</Button>

                    {/* to="/login" */}
                    {/* sử dụng reatc router dom -> to Link nội bộ */}
                    {/* việc chuyển trang nhẹ nhàng đậm chất react */}

                    {/* href="https://react.dev/" */}
                    {/* target blank, mở trong tab mới khi có link ngoài, đặt qua ...passProps trong phần button */}
                    {/* className={cx('custom-login') */}
                    {/* rightIcon={<FontAwesomeIcon icon={faSignIn} />} */}
                    <Button primary>
                        {/* children ở đây là Log in */}
                        Log in
                    </Button>

                    {/* nút ... dọc*/}
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
