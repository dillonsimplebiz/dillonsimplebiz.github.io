
    window._currentDevice = 'tablet';
    window.Parameters = window.Parameters || {
        AjaxContainer: 'div.dmBody',
        WrappingContainer: 'div.dmOuter',
        HomeUrl: 'http://app.multiscreensite.com/site/22043599',
        AccountUUID: '3d875b9e5c88468a9855df44ab3479f3',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: '22043599',
        SiteId: '2481767',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Thu Jun 23 19:13:20 UTC 2022',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialDynamicItem: '',
        InitialPageAlias: 'home',
        InitialPageUuid: '18269d6d6f164e71bf1df588275f8183',
        InitialEncodedPageAlias: 'aG9tZQ==',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '6370',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/22043599?preview=true&dm_device=tablet&dm_exportSite=true&nossl&dm_exportSite_protected=cf30988b_1656011649195_5_4347244d143fe44ad2cd4361616938236ab8f927ed3e30ff073d0bbe199acff9',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        NotificationSubDomain: 'thewindowguytn',
        HasCustomDomain: true,
        showCookieNotification: false,
        cookiesNotificationMarkup: 'null',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'en',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 4,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/22043599',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: false,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        siteCacheKey: '1656011647070_22043599',
        siteInfo: null,
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 6;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if(!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function() {
            },
            getCurrentDeviceType: function() {
                return window._currentDevice;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }

    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }



    function loadCSS(link) {
        try {
            var urlParams = new URLSearchParams(window.location.search);
            var noCSS = !!urlParams.get('nocss');
            var cssTimeout = urlParams.get('cssTimeout') || 0;

            if (noCSS) {
                return;
            }
            requestIdleCallback(function () {
                window.setTimeout(function () {
                    link.onload = null;
                    link.rel = 'stylesheet';
                    link.type = 'text/css'
                }, parseInt(cssTimeout, 10));
            });
        } catch (e) {/* Never fail - this is just a tool for measurements */}
    }
