export interface ArtistPortfolio {
  thumbnail: string
  title: string
  slug: string
  content: string
  images: Image[] | string[]
}

interface Image {
  url: string
  title?: string
  descreption?: string
}

export const artistPortfolio: ArtistPortfolio[] = [
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-01_oqs6gn.jpg',
    title: 'Mutter. 2018',
    slug: 'mutter',
    content: 'Porzellan, Stoff. 115 x 70 x 10 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-01_oqs6gn.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-03_pejlvb.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-02_iq4jaa.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-01_hg0d9s.jpg',
    title: 'O.T. (Grenze). 2016',
    slug: 'ot',
    content:
      'Metall, Draht, Porzellan und Beton. 250 x 200 x 45 cm ©Florian Wehking',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-01_oqs6gn.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-04_g2zqwu.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-02_tfaet8.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-03_ijvfrc.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-01_dzezpy.jpg',
    title: 'O.T. (Grenze). 2016',
    slug: 'ot',
    content:
      'Metall, Draht, Porzellan und Beton. 250 x 200 x 45 cm ©Florian Wehking',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-01_dzezpy.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-03_xwphvp.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-04_rktivo.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-02_b98oto.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/heimat-05_rxiz2h.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mobile-der-drangsal_tqv9sm.jpg',
    title: 'Mobile der Drangsal. 2018',
    slug: 'mobile-der-drangsal',
    content: 'Holz, Knochen, Wolle. 30 x 30 x 40 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mobile-der-drangsal_tqv9sm.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-01_mixvmt.jpg',
    title: 'Sommer 2015.',
    slug: 'sommer',
    content: 'Glas, Porzellan, Wasser. 100 x 50 x 40 cm ©Florian Wehking',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-01_mixvmt.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071397/mina-amini/sommer-04_udcxaf.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071397/mina-amini/sommer-05_fm6qut.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-03_mmut14.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-02_l8vcl5.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/psychic-interior-01_wjutuy.jpg',
    title: '',
    slug: 'psychic-interior-7',
    content: '',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/psychic-interior-07_tjw64g.jpg',
        title: 'O.T. 2018',
        descreption: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-02_xetebf.jpg',
        title: 'Puppi. 2018',
        descreption: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/psychic-interior-01_wjutuy.jpg',
        title: 'Mama Mina. 2018',
        descreption: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-05_u0fzii.jpg',
        title: 'Landschaft ihres Körpers. 2015',
        descreption: 'Aquarell auf Papier. Je. 40 x 30 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-04_guwcvx.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-03_ekbiiw.jpg',
        title: 'O.T. 2018',
        descreption: 'Öl auf Leinwand. 130 x 70 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-06_wcwhkm.jpg',
        title: 'Zwang der Geo. 2012',
        descreption: 'Acryl auf Pappe. 70 x 50 cm',
      },
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/innere-wunde_tkkyor.jpg',
    title: 'Innere Wunde. 2014.',
    slug: 'innere-wunde',
    content: 'Öl auf Holz, Glasur, Nägel. 150 x 80 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/innere-wunde_tkkyor.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-01_pqmbw8.jpg',
    title: 'Geerntet. 2015',
    slug: 'geerntet',
    content:
      'Glasiertes Porzellan, Blut der Künstlerin, Matratze. 180 x 90 x 45 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-01_pqmbw8.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-02_myz2e2.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-04_hnfmbl.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-03_vxaj8h.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-05_snezav.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-06_c26cui.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/demmin-01_xfxnaz.jpg',
    title: 'Innere Wunde. 2014',
    slug: 'demmin',
    content: 'Öl auf Holz, Glasur, Nägel. 150 x 80 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/demmin-01_xfxnaz.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-01_uhstm4.jpg',
    title: 'Himmel und Hölle. 2017',
    slug: 'himmel-und-holle',
    content: 'Knochen, Beton. 225 x 135 x 10 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-01_uhstm4.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-02_fwvgty.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-03_mwcvzg.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/himmel-und-holle-04_etlpdr.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-02_st3lfl.jpg',
    title: 'Himmel und Hölle. 2017',
    slug: 'himmel-und-holle',
    content: 'Knochen, Beton. 225 x 135 x 10 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-01_usuzhj.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-02_st3lfl.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-03_u8lloy.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-01_kikpam.jpg',
    title: 'Derjenige, der nicht weiß zu lieben, kämpft…. 2014',
    slug: 'derjenige-der-nicht-weiß-zu-lieben-kampft',
    content: 'Mixed Media. 150 x 40 x 40 cm ©Shabnam Qaderi',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-01_kikpam.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-02_bqeo7o.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-03_kq4cna.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-05_xjnwxt.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-04_jtjml9.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-2_ilcwki.jpg',
    title: 'Mobile der Drangsal. 2018',
    slug: 'o-t-2',
    content: 'Holz, Knochen, Wolle. 30 x 30 x 40 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-2_ilcwki.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-01_jqkze4.jpg',
    title: 'Am Ende der Hoffnuglösigkeit. 2013',
    slug: 'am-ende-der-hoffnuglosigkeit',
    content: 'Öl auf Leinwand. Handgemalte glasierte Fliesen. 160 x 120 cm',
    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-01_jqkze4.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-02_leeax0.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-03_evujhp.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-03_jyh2pa.jpg',
    title: '36° 12′ N, 37° 9′ O. 2017',
    slug: '36-12n-379o',
    content: 'Abgeformter Beton, Acryl. 140 x 70 x 30 cm ©Florian Wehking',

    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-02_u23efz.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-03_jyh2pa.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-04_bp3aoo.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-01_yb6wxa.jpg',
    ],
  },
  {
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel02_ymej2x.jpg',
    title: 'Schaukel! 2017',
    slug: 'schaukel',
    content:
      'Holz, Acryl, Juteschnur, Scheibenwischermotor, Sand. 260 x 240 x 200 cm ©Florian Wehking',

    images: [
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/schaukel01_fvle0f.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel02_ymej2x.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel03_t67u1s.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel04_swkbs3.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel05_b488sg.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel06_ifb2mq.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/schaukel07_rj8kxa.jpg',
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel08_pkzh2x.jpg',
    ],
  },
]
