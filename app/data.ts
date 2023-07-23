export interface ArtistPortfolio {
  id: string
  thumbnail: string
  title: string
  slug: string
  content: string
  images: PortfolioImage[]
}

export interface PortfolioImage {
  url: string
  title?: string
  description?: string
}

export const artistPortfolio: ArtistPortfolio[] = [
  {
    id: '01',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-01_oqs6gn.jpg',
    title: 'Mutter. 2018',
    slug: 'mutter',
    content: 'Porzellan, Stoff. 115 x 70 x 10 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-03_pejlvb.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-02_iq4jaa.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mutter-01_oqs6gn.jpg',
      },
    ],
  },
  {
    id: '04',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mobile-der-drangsal_tqv9sm.jpg',
    title: 'Mobile der Drangsal. 2018',
    slug: 'mobile-der-drangsal',
    content: 'Holz, Knochen, Wolle. 30 x 30 x 40 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/mobile-der-drangsal_tqv9sm.jpg',
      },
    ],
  },
  {
    id: '07',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/innere-wunde_tkkyor.jpg',
    title: 'Innere Wunde. 2014.',
    slug: 'innere-wunde',
    content: 'Öl auf Holz, Glasur, Nägel. 150 x 80 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/innere-wunde_tkkyor.jpg',
      },
    ],
  },
  {
    id: '10',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-01_uhstm4.jpg',
    title: 'Himmel und Hölle. 2017',
    slug: 'himmel-und-holle',
    content: 'Knochen, Beton. 225 x 135 x 10 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-01_uhstm4.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-02_fwvgty.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/himmel-und-holle-03_mwcvzg.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071392/mina-amini/himmel-und-holle-04_etlpdr.jpg',
      },
    ],
  },
  {
    id: '13',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-2_ilcwki.jpg',
    title: 'Mobile der Drangsal. 2018',
    slug: 'o-t-2',
    content: 'Holz, Knochen, Wolle. 30 x 30 x 40 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-2_ilcwki.jpg',
      },
    ],
  },
  {
    id: '15',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-03_jyh2pa.jpg',
    title: '36° 12′ N, 37° 9′ O. 2017',
    slug: '36-12n-379o',
    content: 'Abgeformter Beton, Acryl. 140 x 70 x 30 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-02_u23efz.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-01_yb6wxa.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-03_jyh2pa.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071387/mina-amini/36-12n-379o-04_bp3aoo.jpg',
      },
    ],
  },
  {
    id: '02',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-01_hg0d9s.jpg',
    title: 'O.T. (Grenze). 2016',
    slug: 'ot',
    content:
      'Metall, Draht, Porzellan und Beton. 250 x 200 x 45 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-01_hg0d9s.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-04_g2zqwu.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-02_tfaet8.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/o-t-03_ijvfrc.jpg',
      },
    ],
  },
  {
    id: '05',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-01_mixvmt.jpg',
    title: 'Sommer 2015.',
    slug: 'sommer',
    content: 'Glas, Porzellan, Wasser. 100 x 50 x 40 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-01_mixvmt.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071397/mina-amini/sommer-04_udcxaf.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071397/mina-amini/sommer-05_fm6qut.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-03_mmut14.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sommer-02_l8vcl5.jpg',
      },
    ],
  },
  {
    id: '08',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-01_pqmbw8.jpg',
    title: 'Geerntet. 2015',
    slug: 'geerntet',
    content:
      'Glasiertes Porzellan, Blut der Künstlerin, Matratze. 180 x 90 x 45 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-04_hnfmbl.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-02_myz2e2.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-06_c26cui.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-03_vxaj8h.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/geerntet-01_pqmbw8.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/geerntet-05_snezav.jpg',
      },
    ],
  },
  {
    id: '11',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-02_st3lfl.jpg',
    title: 'Sieben Städte der Liebe. 2015',
    slug: 'sieben-stadte-der-liebe',
    content:
      'Glasierter abgeformter Ton (Lebensgroße). 210 x 20 x 12 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-02_st3lfl.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-01_usuzhj.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/sieben-stadte-der-liebe-03_u8lloy.jpg',
      },
    ],
  },
  {
    id: '14',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-01_jqkze4.jpg',
    title: 'Am Ende der Hoffnuglösigkeit. 2013',
    slug: 'am-ende-der-hoffnuglosigkeit',
    content: 'Öl auf Leinwand. Handgemalte glasierte Fliesen. 160 x 120 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-01_jqkze4.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-02_leeax0.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/am-ende-der-hoffnuglosigkeit-03_evujhp.jpg',
      },
    ],
  },
  {
    id: '03',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-01_dzezpy.jpg',
    title: 'Heimat. 2018',
    slug: 'heimat',
    content: 'Fundstück, Fliesen, Wasser. 45 x 40 x 27 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071391/mina-amini/heimat-05_rxiz2h.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-01_dzezpy.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-03_xwphvp.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-04_rktivo.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071390/mina-amini/heimat-02_b98oto.jpg',
      },
    ],
  },
  {
    id: '06',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/psychic-interior-01_wjutuy.jpg',
    title: '',
    slug: 'psychic-interior-7',
    content: '',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-04_guwcvx.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-06_wcwhkm.jpg',
        title: 'Zwang der Geo. 2012',
        description: 'Acryl auf Pappe. 70 x 50 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/psychic-interior-07_tjw64g.jpg',
        title: 'O.T. 2018',
        description: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-02_xetebf.jpg',
        title: 'Puppi. 2018',
        description: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071393/mina-amini/psychic-interior-01_wjutuy.jpg',
        title: 'Mama Mina. 2018',
        description: 'Aquarell auf Papier. 24 x 17 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-05_u0fzii.jpg',
        title: 'Landschaft ihres Körpers. 2015',
        description: 'Aquarell auf Papier. Je. 40 x 30 cm',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/psychic-interior-03_ekbiiw.jpg',
        title: 'O.T. 2018',
        description: 'Öl auf Leinwand. 130 x 70 cm',
      },
    ],
  },
  {
    id: '09',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/demmin-01_xfxnaz.jpg',
    title: 'Innere Wunde. 2014',
    slug: 'demmin',
    content: 'Öl auf Holz, Glasur, Nägel. 150 x 80 cm',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/demmin-01_xfxnaz.jpg',
      },
    ],
  },
  {
    id: '12',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-01_kikpam.jpg',
    title: 'Derjenige, der nicht weiß zu lieben, kämpft…. 2014',
    slug: 'derjenige-der-nicht-weiss-zu-lieben-kampft',
    content: 'Mixed Media. 150 x 40 x 40 cm ©Shabnam Qaderi',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071388/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-01_kikpam.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-02_bqeo7o.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-03_kq4cna.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-05_xjnwxt.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071389/mina-amini/derjenige-der-nicht-wei%C3%9F-zu-lieben-kampft-04_jtjml9.jpg',
      },
    ],
  },
  {
    id: '16',
    thumbnail:
      'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel02_ymej2x.jpg',
    title: 'Schaukel! 2017',
    slug: 'schaukel',
    content:
      'Holz, Acryl, Juteschnur, Scheibenwischermotor, Sand. 260 x 240 x 200 cm ©Florian Wehking',
    images: [
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071394/mina-amini/schaukel01_fvle0f.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel02_ymej2x.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel03_t67u1s.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel04_swkbs3.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel05_b488sg.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel06_ifb2mq.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071396/mina-amini/schaukel07_rj8kxa.jpg',
      },
      {
        url: 'https://res.cloudinary.com/dxu6gcib2/image/upload/v1689071395/mina-amini/schaukel08_pkzh2x.jpg',
      },
    ],
  },
]
