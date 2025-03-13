type SocialMedia = {
    pageName: string;
    link: string;
}

type ContactDetails = {
    mobile: string;
    email: string;
    facebook: SocialMedia;
    instagram: SocialMedia;
}

const contactDetails: ContactDetails = {
    mobile: '+(447) 7792684716',
    email: 'mariescakesandbakes@outlook.com',
    facebook: {
        pageName: 'Marie\'s Cakes & Bakes',
        link: 'https://www.facebook.com/profile.php?id=61569650397474'
    },
    instagram: {
        pageName: 'Marie\'s Cakes & Bakes',
        link: 'https://www.instagram.com/mariescakesandbakes_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    }
};

export default contactDetails;