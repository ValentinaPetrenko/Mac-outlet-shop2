const items = [
    {
        id: 1,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 999, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 256, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 435, // кол-во едениц товара в наличии
        	reviews: 77, // процент положительных отзывов
        }
    },
    {
        id: 2,
        category: 'mac',
        imgUrl: 'items/macbook-air.png',
        name: 'MacBook Air',
        display: 13.3, // дюймы
        color: ['Gold', 'Silver', 'Space Grey'],
        price: 1249, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.61', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.29', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook Air', '30W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 84, // процент положительных отзывов
        }
    },
    {
        id: 3 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1299, // доллары
        chip: {
            name: 'Intel Core i5',
            cores: 8,
        },
        ram: 8, // Гб
        storage: 512, // Гб
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 25, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 4 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro13.png',
        name: 'MacBook Pro 13',
        display: 13.3, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 1499, // доллары
        chip: {
            name: 'M1',
            cores: 8,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio-quality three-mic array with high signal-to-noise ratio and directional‑beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.56', // cm
            width: '30.41', // cm
            depth: '21.24', // cm
            weight: '1.4', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 13', '61W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 256, // кол-во едениц товара в наличии
        	reviews: 80, // процент положительных отзывов
        }
    },
    {
        id: 5 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2399, // доллары
        chip: {
            name: ' Intel Core i7',
            cores: 6,
        },
        ram: 16, // Гб
        storage: 1024, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 124, // кол-во едениц товара в наличии
        	reviews: 91, // процент положительных отзывов
        }
    },
    {
        id: 6 ,
        category: 'mac',
        imgUrl: 'items/macbook-pro16.png',
        name: 'MacBook Pro 16',
        display: 16, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 2799, // доллары
        chip: {
            name: ' Intel Core i9',
            cores: 8,
        },
        ram: 32, // Гб
        storage: 2048, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '1.62', // cm
            width: '35.79', // cm
            depth: '24.59', // cm
            weight: '2', // Кг
        },
        os: 'macOS',
        InTheBox: ['MacBook pro 16', '96W USB-C Power Adapter', 'USB-C Charge Cable (2 m)'],
        orderInfo: {
        	inStock: 69, // кол-во едениц товара в наличии
        	reviews: 90, // процент положительных отзывов
        }
    },
    {
        id: 7 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 21.5, // дюймы
        color: [  'Space Grey'],
        price: 1099, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 4.2 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '45', // cm
            width: '52.8', // cm
            depth: '17.5', // cm
            weight: '5.44', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 742, // кол-во едениц товара в наличии
        	reviews: 75, // процент положительных отзывов
        }
    },
    {
        id: 8 ,
        category: 'mac',
        imgUrl: 'items/imac.png',
        name: 'IMac',
        display: 27, // дюймы
        color: [  'Space Grey'],
        price: 1799, // доллары
        chip: {
            name: 'Intel Core i5,',
            cores: '6',//dual‑core
        },
        ram: 8, // Гб
        storage: 256,
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: '720p FaceTime HD camera',
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '51.6', // cm
            width: '65', // cm
            depth: '20.3', // cm
            weight: '8.92', // Кг
        },
        os: 'macOS',
        InTheBox: ['iMac with Retina 5K display ', 'Magic Keyboard', 'Magic Mouse 2', 'Power cord', 'Lightning to USB Cable', 'Polishing cloth'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 9 ,
        category: 'mac',
        imgUrl: 'items/mac_pro.png',
        name: 'Mac Pro',
        display: null, // дюймы
        color: [  'Space Grey'],
        price: 2499, // доллары
        chip: {
            name: 'Intel Xeon W',
            cores: '16',//dual‑core
        },
        ram: 64, // Гб
        storage: 1024,//
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0 '],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Microphone',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '50', // cm
            width: '30', // cm
            depth: '60', // cm
            weight: '18', // Кг
        },
        os: 'macOS',
        InTheBox: ['Mac Pro', 'Magic Keyboard with Numeric Keypad', 'Magic Mouse 2', 'USB-C to Lightning Cable (1 m)', 'Power cord (2 m)'],
        orderInfo: {
        	inStock: 587, // кол-во едениц товара в наличии
        	reviews: 56, // процент положительных отзывов
        }
    },
    {
        id: 10 ,
        category: 'ipad',
        imgUrl: 'items/ipad-pro.jpeg',
        name: 'IPad Pro ',
        display: 11, // дюймы
        color: [ 'Silver', 'Space Grey'],
        price: 750, // доллары
        chip: {
            name: 'A12Z Bionic',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // TB
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Studio‑quality three-mic array with high signal-to-noise ratio and directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.470', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Pro', 'USB-C Charge Cable (1 meter)', '18W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 32, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 34 ,
        category: 'ipad',
        imgUrl: 'items/ipad-air.png',
        name: 'IPad Air',
        display: 10.9, // дюймы
        color: [ 'Silver', 'Space Grey','Rose Gold','Green','Sky Blue'],
        price: 549, // доллары
        chip: {
            name: 'A14 Bionic ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '24.7', // cm
            width: '17.8', // cm
            depth: '0.6', // cm
            weight: '0.458', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad Air', 'USB-C Charge Cable (1 meter)', '20W USB-C Power Adapter'],
        orderInfo: {
        	inStock: 97, // кол-во едениц товара в наличии
        	reviews: 97, // процент положительных отзывов
        }
    },
    {
        id: 11 ,
        category: 'ipad',
        imgUrl: 'items/ipad.png',
        name: 'IPad',
        display: 10.2, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '25.7', // cm
            width: '17.4', // cm
            depth: '0.6', // cm
            weight: '0.490', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 0, // процент положительных отзывов
        }
    },
    {
        id: 12 ,
        category: 'ipad',
        imgUrl: 'items/ipad-mini.png',
        name: 'IPad mini',
        display: 7.9, // дюймы
        color: [ 'Silver', 'Space Grey','Gold'],
        price: 309, // доллары
        chip: {
            name: 'A12 Bionic  ',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // TB
        touchId: true,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Ultra Wide: 10MP',
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '20.3', // cm
            width: '13.4', // cm
            depth: '0.6', // cm
            weight: '0.300', // Кг
        },
        os: 'macOS',
        InTheBox: ['iPad mini', 'USB-C Power Adapter', 'Lightning to USB-C Cable'],
        orderInfo: {
        	inStock: 77, // кол-во едениц товара в наличии
        	reviews: 85, // процент положительных отзывов
        }
    },
    {
        id: 13 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-series-6.png',
        name: 'Apple Watch Series 6',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 399, // доллары
        chip: {
            name: 'S6 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Solo Loop', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 90, // кол-во едениц товара в наличии
        	reviews: 458, // процент положительных отзывов
        }
    },
    {
        id: 14 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch-se.jpg',
        name: 'Apple Watch Series SE',
        display: 1.73228, // дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 22.1654, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,4', // cm
            width: '3.8', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 79, // кол-во едениц товара в наличии
        	reviews: 69, // процент положительных отзывов
        }
    },
    {
        id: 15 ,
        category: 'Watch',
        imgUrl: 'items/apple-watch3.jpg',
        name: 'Apple Watch Series 3',
        display: 22.1654 ,// дюймы
        color: [ 'Silver', 'Space Grey','Gold','Blue','Graphite'],
        price: 309, // доллары
        chip: {
            name: 'S5 SiP   ',
            cores: null,
        },
        ram: null, // Гб
        storage: 8, // TB
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: {
            front: null,
            back: null,
        },
        audio: {
            microphone: 'Dual microphones for calls, video recording, and audio recording',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4,2', // cm
            width: '3.3', // cm
            depth: '0.6', // cm
            weight: '1.07', // Кг
        },
        os: 'macOS',
        InTheBox: ['Case', 'Band (can be configured for either S/M or M/L length)', '1m Magnetic Charging Cable'],
        orderInfo: {
        	inStock: 47, // кол-во едениц товара в наличии
        	reviews: 93, // процент положительных отзывов
        }
    },
    {
        id: 16,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 799, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 73, // кол-во едениц товара в наличии
        	reviews: 12, // процент положительных отзывов
        }
    },
    {
        id: 17,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12',
        display: 6.1, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 18,
        category: 'iphone',
        imgUrl: 'items/iphone_12.jpg',
        name: 'IPhone 12 Mini',
        display: 5.4, // дюймы
        color: ['Black', 'White', 'Green', 'Blue', 'Red'],
        price: 669, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.1', // cm
            width: '6.41', // cm
            depth: '0.7', // cm
            weight: '0.135', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 43, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 19,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 999, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 84, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 20,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro',
        display: 6.1, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.6', // cm
            width: '7.1', // cm
            depth: '0.7', // cm
            weight: '0.164', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 21,
        category: 'iphone',
        imgUrl: 'items/iphone-12-pro.jpeg',
        name: 'IPhone 12 Pro Max',
        display: 6.7, // дюймы
        color: ['Silver', 'Graphite', 'Gold', 'Pacific Blue'],
        price: 1099, // доллары
        chip: {
            name: 'A14',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Pro 12MP camera system',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '16.0', // cm
            width: '7.8', // cm
            depth: '0.7', // cm
            weight: '0.228', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 5, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 22,
        category: 'iphone',
        imgUrl: 'items/iphone-se.jpeg',
        name: 'IPhone SE',
        display: 4.7, // дюймы
        color: ['Black', 'White', 'Red'],
        price: 1099, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '13.8', // cm
            width: '7.7', // cm
            depth: '0.7', // cm
            weight: '0.148', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 81, // кол-во едениц товара в наличии
        	reviews: 73, // процент положительных отзывов
        }
    },
    {
        id: 23,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Dual 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 98, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 24,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 999, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 512, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 115, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 25,
        category: 'iphone',
        imgUrl: 'items/iphone11.jpeg',
        name: 'IPhone 11',
        display: 6.1, // дюймы
        color: ['Black', 'Green', 'Yellow', 'Purple', 'White', 'Red'],
        price: 899, // доллары
        chip: {
            name: 'A13',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', '5G GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: 'Triple 12MP Ultra Wide and Wide cameras',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 26,
        category: 'iphone',
        imgUrl: 'items/iphone-xr.jpg',
        name: 'IPhone XR',
        display: 6.1, // дюймы
        color: ['Black', 'Coral', 'Yellow', 'Blue', 'White', 'Red'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '15.0', // cm
            width: '7.5', // cm
            depth: '0.8', // cm
            weight: '0.194', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 14', 'USB-C to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 86, // процент положительных отзывов
        }
    },
    {
        id: 27,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 699, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 128, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 34, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 28,
        category: 'iphone',
        imgUrl: 'items/iphone-xs.jpg',
        name: 'IPhone XS',
        display: 5.8, // дюймы
        color: ['White', 'Rose Gold', 'Space Grey'],
        price: 799, // доллары
        chip: {
            name: 'A12',
            cores: null,
        },
        ram: null, // Гб
        storage: 256, // Гб
        touchId: false,
        faceId: true,
        wireless: ['Wi-Fi', 'Bluetooth 5.0', 'FDD‑LTE GSM/EDGE'],
        camera: {
            front: '720p FaceTime HD camera',
            back: '12MP Wide camera',
        },
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '14.3', // cm
            width: '7.0', // cm
            depth: '0.7', // cm
            weight: '0.177', // Кг
        },
        os: 'IOS',
        InTheBox: ['iPhone with iOS 12', 'USB-A to Lightning Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 29,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 179, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 32, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 2, // кол-во едениц товара в наличии
        	reviews: 99, // процент положительных отзывов
        }
    },
    {
        id: 30,
        category: 'tv',
        imgUrl: 'items/apple-tv.jpeg',
        name: 'Apple TV 4K',
        display: null, // дюймы
        color: ['Black'],
        price: 199, // доллары
        chip: {
            name: 'A10X',
            cores: null,
        },
        ram: null, // Гб
        storage: 64, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Wi-Fi', 'Bluetooth 5.0'],
        camera: null,
        audio: null,
        size: {
            height: '3.5', // cm
            width: '9.8', // cm
            depth: '3.5', // cm
            weight: '0.425', // Кг
        },
        os: 'tvOS',
        InTheBox: ['Apple TV 4K', 'Siri Remote', 'Power cord', 'Lightning to USB cable', 'Documentation'],
        orderInfo: {
        	inStock: 1, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 31,
        category: 'airpods',
        imgUrl: 'items/airpods.jpg',
        name: 'AirPods',
        display: null, // дюймы
        color: ['White'],
        price: 199, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '5.3', // cm
            width: '4.4', // cm
            depth: '0.2', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods', 'Wireless Charging Case', 'Lightning to USB-A Cable', 'Documentation'],
        orderInfo: {
        	inStock: 23, // кол-во едениц товара в наличии
        	reviews: 100, // процент положительных отзывов
        }
    },
    {
        id: 32,
        category: 'airpods',
        imgUrl: 'items/airpods_pro.jpg',
        name: 'AirPods Pro',
        display: null, // дюймы
        color: ['White'],
        price: 299, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '4.5', // cm
            width: '6.0', // cm
            depth: '0.21', // cm
            weight: '0.04', // Кг
        },
        os: null,
        InTheBox: ['AirPods Pro', 'Wireless Charging Case', 'Lightning to USB-C Cable', 'Documentation', 'Silicone ear tips (three sizes)'],
        orderInfo: {
        	inStock: 29, // кол-во едениц товара в наличии
        	reviews: 94, // процент положительных отзывов
        }
    },
    {
        id: 33,
        category: 'airpods',
        imgUrl: 'items/airpods-max.jpg',
        name: 'AirPods Max',
        display: null, // дюймы
        color: ['White'],
        price: 599, // доллары
        chip: {
            name: 'H!',
            cores: null,
        },
        ram: null, // Гб
        storage: null, // Гб
        touchId: false,
        faceId: false,
        wireless: ['Bluetooth 5.0'],
        camera: null,
        audio: {
            microphone: 'Three-mic array with directional beamforming',
            speakers: 'Stereo speakers',
        },
        size: {
            height: '18.7', // cm
            width: '16.8', // cm
            depth: '8.3', // cm
            weight: '0.38', // Кг
        },
        os: null,
        InTheBox: ['AirPods MAx', 'Smart Case', 'Lightning to USB-C Cable', 'Documentation'],
        orderInfo: {
        	inStock: 0, // кол-во едениц товара в наличии
        	reviews: 5, // процент положительных отзывов
        }
    },
];

//card

let cardslist = document.getElementById("cards-list");
let card = document.getElementById("card");

let modalWindow=document.querySelector(".modal-window");

let basketList=document.getElementById("basket-list");
let basketWindow=document.getElementById("basket-window");



function redraw(device){
    cardslist.innerHTML = "";
    device.map(item=>{

        let newElement = document.createElement("div");
            newElement.classList.add("card-product")
        
        
        let imageproduct = card.getElementsByClassName("image-product");
            imageproduct[0].src = item.imgUrl;
        
        let title=card.getElementsByClassName("title");
          title[0].textContent=item.name;
        
        let availability=card.getElementsByClassName("availability");
           availability[0].textContent= item.orderInfo.inStock;
        
        let price=card.getElementsByClassName("price");
          price[0].textContent=item.price;
        
        let positive=card.getElementsByClassName("positive");
          positive[0].textContent=item.orderInfo.reviews;
        
        let orders=card.getElementsByClassName("number-orders");
         orders[0].textContent=Math.floor(Math.random() * 10000) + 1;
         
         let check =card.getElementsByClassName("check");
         if (item.orderInfo.inStock<=0) {
             check[0].src="img/icons/close.svg"
             check[0].style.border="none"
             check[0].style.width="40px"
             check[0].style.height="40px"
             check[0].style.margin="10px"
             check[0].style.filter= "brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(6773%) hue-rotate(2deg) brightness(101%) contrast(118%)"
         }else{
             check[0].src="img/icons/check.svg"
             check[0].style.padding="2px"
             check[0].style.width="30px"
             check[0].style.height="30px"
             check[0].style.margin="10px"
             check[0].style.border="#1bc943 3px solid"
             check[0].style.borderRadius="50%"
             check[0].style.filter= "brightness(0) saturate(100%) invert(57%) sepia(41%) saturate(658%) hue-rotate(73deg) brightness(95%) contrast(83%)"
         }
         let btnAdd=card.getElementsByClassName("add");
         if (item.orderInfo.inStock<=0) {
             btnAdd[0].style.backgroundColor="grey"
             btnAdd[0].style.cursor="default"
         }
         else{
             btnAdd[0].style.backgroundColor="#0E49B5"
             btnAdd[0].style.cursor="pointer"
         }
            
            newElement.addEventListener("click",()=>ShowInfoBox(item));
            let productPage=document.querySelector(".product-page");
            productPage.addEventListener("click",()=>remove());
         
            
        
            newElement.innerHTML = card.innerHTML;
        
            let addbtn=newElement.querySelector(".add-btn");
            addbtn.addEventListener("click",(event) => AddToCard(event,item));
            
  
            let btnbasket=document.getElementById("basket-img");
            btnbasket.addEventListener("click",() => basket(item)); 
            
            
            cardslist.appendChild(newElement);
        
            // let plusBasket=document.querySelector(".button-right");
            // plusBasket.addEventListener("click", PlusFunction(item));
            
        })
        

}
redraw(items);


//Добавление в корзину при нажатии на button
basketMas=[];
 function AddToCard(event,item){
    let index=basketMas.find(obj=>obj.device.id===item.id);
    if(!index){
        basketMas.push({count:1, device:item})
    }else{
        index.count++;
    }
    event.stopPropagation();
    console.log("AddToCard",basketMas);
 }

let basketButton=document.querySelector(".basket-img");
basketButton.addEventListener("click",()=> ClickBasket());

let containerMain=document.querySelector(".container-main");
containerMain.addEventListener("click", ()=> ClickRemove());

function ClickBasket(){
    basketList.style.display="block";
    basket(items)
    return basketMas;
    
}
function ClickRemove(){
    basketList.style.display="none";
}

function basket(item){
    let cartWindow=document.createElement("div");
    cartWindow.classList.add("basket-item");
    let basketBody=document.getElementById("basket-body")
    cartWindow.innerHTML=`
        <div id="basket-body-change" class="basket-body-change">
            <img class="basket-img" src="${item.imgUrl}" alt="basket">
            <div class="basket-info">
                <span class="basket-info-title">${item.name}</span>
                <span class="basket-info-price">$ ${item.price}</span>
            </div>
        </div>
        <div class="basket-count">
            <button class="left-button">
                <img class="button-left" src="img/icons/arrow_left.svg" data-id="${item.id}" alt="button">
            </button>
            <input type="number" class="count-number" value="1"></input>
            <button class="right-button">
                <img class="button-right" src="img/icons/arrow_left.svg" data-id="${item.id}" alt="button">
            </button>
        </div>
        <button class="delete-button">
            <img class="button-delete" src="img/X.png" data-id="${item.id}" alt="button">
        </button>`
    basketBody.appendChild(cartWindow)
}



// document.onclick = event =>{
//     console.log(event.target.classList);
//     if(event.target.classList.contains('buuton-right')){
//         plusFunction(event.target.dataset.id);
//     }
//     if(event.target.classList.contains('buuton-left')){
//         minusFunction(event.target.dataset.id);
// }
// let plusFunction = id=>{
//     cart[id]++;
//     basket()
// }
// let minusFunction = id=>{
//     if (cart[id]-1==0){
//         deletFunction(id);
//         return true;
//     }
//     cart[id]--;
//     basket()
// }

// let deletFunction = id=>{
//     delete cart[id];
//     basket()
// }





//Modalwindow

function ShowInfoBox(item){
    let img=modalWindow.querySelector(".product-item-image");
    img.src=item.imgUrl;

    let titel=modalWindow.querySelector(".title2");
    titel.textContent=item.name;

    let positive=modalWindow.querySelector(".positive2");
    positive.textContent=item.orderInfo.reviews;

    let orders=modalWindow.querySelector(".number-orders2");
    orders.textContent=Math.floor(Math.random() * 10000) + 1;

    let color=modalWindow.querySelector(".colorname");
    color.textContent=item.color;

    let system=modalWindow.querySelector(".systemname");
    system.textContent=item.os;

    let chip=modalWindow.querySelector(".chipname");
    chip.textContent=item.chip.name;

    let height=modalWindow.querySelector(".heightname");
    height.textContent=item.size.height;

    let width=modalWindow.querySelector(".widthname");
    width.textContent=item.size.width;

    let depth=modalWindow.querySelector(".depthname");
    depth.textContent=item.size.depth;

    let weight=modalWindow.querySelector(".weightname");
    weight.textContent=item.size.weight;

    let price=modalWindow.querySelector(".price2");
    price.textContent=item.price;
    
    let stock=modalWindow.querySelector(".stock");
    stock.textContent=item.orderInfo.inStock;

    modalWindow.style.visibility="visible";

    let addbtnModal=document.querySelector(".add-btn-modal");
    addbtnModal.addEventListener("click",(event) => AddToCard(event,item)); 
}

function remove(){
    modalWindow.style.visibility="hidden";
}




//open filter

function openNav(){
    document.querySelector(".filter").style.width="300px";
    let cardList=document.querySelector(".cards-list"); 
    cardList.style[`margin-left`]=`350px`;
    cardList.style.width=`calc(100% - 350px)`;
   
}
function closeNav() {
    document.querySelector(".filter").style.width="0";
    let cardList2=document.querySelector(".cards-list"); 
    cardList2.style[`margin-left`]=`0px`;
    cardList2.style.width=`100%`;
}

// change-window-filter

let vectorPrice=document.querySelector(".vector-price");
let priceWindow=document.querySelector(".filter-window-price");
vectorPrice.addEventListener("click",WindowChangePrice);
function WindowChangePrice(){
    if(priceWindow.style.display !=="block"){
        priceWindow.style.display ="block"
        vectorPrice.style.transform = "rotate(0deg)";
    }else{
        priceWindow.style.display ="none"
        vectorPrice.style.transform = "rotate(-90deg)";
    } 
}

let vectorColor=document.querySelector(".vector-color");
let colorWindow=document.querySelector(".filter-window-color");
vectorColor.addEventListener("click",WindowChangeColor);
function WindowChangeColor(){
    if(colorWindow.style.display !=="block"){
        colorWindow.style.display ="block"
        vectorColor.style.transform = "rotate(0deg)";
    }else{
        colorWindow.style.display ="none"
        vectorColor.style.transform = "rotate(-90deg)";
    } 
}

let vectorMemory=document.querySelector(".vector-memory");
let memoryWindow=document.querySelector(".filter-window-memory");
vectorMemory.addEventListener("click",WindowChangeMemory);
function WindowChangeMemory(){
    if(memoryWindow.style.display !=="block"){
        memoryWindow.style.display ="block"
        vectorMemory.style.transform = "rotate(0deg)";
    }else{
        memoryWindow.style.display ="none"
        vectorMemory.style.transform = "rotate(-90deg)";
    } 
}

let vectorOs=document.querySelector(".vector-os");
let osWindow=document.querySelector(".filter-window-os");
vectorOs.addEventListener("click",WindowChangeOs);
function WindowChangeOs(){
    if(osWindow.style.display !=="block"){
        osWindow.style.display ="block"
        vectorOs.style.transform = "rotate(0deg)";
    }else{
        osWindow.style.display ="none"
        vectorOs.style.transform = "rotate(-90deg)";
    } 
}

let vectorDisplay=document.querySelector(".vector-display");
let displayWindow=document.querySelector(".filter-window-display");
vectorDisplay.addEventListener("click",WindowChangeDisplay);
function WindowChangeDisplay(){
    if(displayWindow.style.display !=="block"){
        displayWindow.style.display ="block"
        vectorDisplay.style.transform = "rotate(0deg)";
    }else{
        displayWindow.style.display ="none"
        vectorDisplay.style.transform = "rotate(-90deg)";
    } 
}




//Фильтр работающий

let filter = {
    color: [],
    storage: [],
    os: [],
    display: [],
}
let filterParmsHandler = {
    color: (val) => ({ id: val }),
    storage: (val) => ({ id: val }),
    os: (val) => ({ id: val }),
    display: (val) => ({ id: val, from: val.split("-")[0], to: val.split("-")[1] }),
}
function filterActionHandler(callback) {
    this.filterContainer.querySelectorAll("input").forEach(item => {
        item.onchange = (item.type === 'number') ?
            () => {
                this.updateAndRenderInput(item);
                callback();
            } :
            () => {
                this.updateAndRender(item)
                callback();
            };

    })
}



// function filterInputUpdate(value, key, prop) {
//     filter[key][prop] = value;

// }

function filterUpdate(el, key) {
    let value = key.srcElement.defaultValue;
    if (key.srcElement.checked) {
        let index = filter[el].findIndex(filterValue => filterValue.id === el)
        if (index === -1) {
            filter[el].push(filterParmsHandler[el](value));
            console.log(filter);
        }
    } else {
        let index = filter[el].findIndex(filterValue => filterValue.id === el)
        if (index === -1) {
            filter[el].splice(index, 1);
        }
    }
    filtration()
}


function filtration() {
    redraw(items.filter(device => filteredData(device)));

}

function filteredData(device) {
    let res = 0
    for (let key in filter) {
        switch (key) {
            case 'storage':
                if (filter[key].length > 0) {
                    res = filter[key].findIndex(filterStorage => String(device.storage) === filterStorage.id);
                }
                break;
            case 'os':
                if (filter[key].length > 0) {
                    res = filter[key].findIndex(filterOs => String(device[key]) === filterOs.id);
                }
                break;
            case 'color':
                if (filter[key].length > 0) {
                    res = filter[key].findIndex(filterColor => device.color.includes(filterColor.id));
                }
                break;

            case 'display':
                if (filter[key].length > 0) {
                    res = filter[key].findIndex(filterItem => device.display > filterItem.from && device.display < filterItem.to)
                }
                break
            case 'price':
                 if (this.filter[key].from && this.filter[key].to) {
                    res = (this.filter[key].from <= device.price && this.filter[key].to >= device.price) ? 1 : -1;
                }
                break;
        }

        if (res === -1) {
            break
        }
    }
    return (res > -1);
}

















// filter={
//     display:[ ],
// }

// function filterUpdate (key,value){
//     console.log(key,value.srcElement.defaultValue)
//     if(value.srcElement.checked){
//         let index = filter[key].find(filterValue => filterValue.id === value.srcElement.defaultValue)
//     if(!index){
//     filter[key].push({id:value.srcElement.defaultValue, from :value.srcElement.defaultValue.split("-")[0],to :value.srcElement.defaultValue.split("-")[1]});
//    } }else{
//     let index = filter[key].findIndex(filterValue => filterValue.id === value.srcElement.defaultValue)
//     if(index>-1){
//     filter[key].splice(index);
//     }
 
//     }
//     if(filter[key].length===0){
//         redraw(items)
//         return;
//     }
//  runFilter()
//  }
 
// function filterInputUpdate(key,value,prop){
//     this.filter[key][prop]=value
//     runFilter()
// }

// function runFilter(){
//     let filterObjects=items.filter(device=>filtreredData(device));
//     cardslist.innerHTML="";
//     redraw(filterObjects)
// };

// function filtreredData(device){
//     let filterDevice=filter.display;
//     let resDisplay= filterDevice.find(filterItem=> device.display >filterItem.from && device.display < filterItem.to);


//     console.log(resDisplay);
//     return !!resDisplay 
// }




