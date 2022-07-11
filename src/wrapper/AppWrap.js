import { NavigationDot, SocialMedia } from '../components';


const AppWrap = (Component, idName, className) => function HOC() {
    return (
        <div id={idName} className={`app__container ${className}`}>
            <SocialMedia />

            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright'>
                    <p className='p-text'>@2022 Jasem Nazeri</p>
                </div>
            </div>

            <NavigationDot active={idName} />
        </div>
    );
}

export default AppWrap