import { Button, Grid, Typography } from "antd"
import { BiBadgeCheck, BiBriefcase, BiChat, BiCheck, BiChevronsRight, BiGroup, BiLockAlt, BiShoppingBag, BiSolidGraduation, BiSolidUserVoice } from "react-icons/bi";

const Home = () => {
  const breakpoints = Grid.useBreakpoint();

  const heroTitleResponsive = () => {
    if (breakpoints.xxl || breakpoints.xl) return 80;
    if (breakpoints.lg) return 64;
    if (breakpoints.md) return 48;
    if (breakpoints.sm) return 36;
    return 30;
  };

  const subtitleResponsive = () => {
    if (breakpoints.xxl || breakpoints.xl) return 60;
    if (breakpoints.lg) return 48;
    if (breakpoints.md) return 40;
    if (breakpoints.sm) return 32;
    return 24;
  };

  const smallSubtitleResponsive = () => {
    if (breakpoints.xxl || breakpoints.xl) return 42;
    if (breakpoints.lg) return 34;
    if (breakpoints.md) return 26;
    if (breakpoints.sm) return 18;
    return 10;
  };

  return (
    <>
      <section id='beranda' className="w-full max-w-screen-2xl mx-auto px-4 lg:px-20 pt-12 lg:pt-24 pb-20 flex flex-col gap-y-12 items-center justify-center ">
        <div style={{ backgroundImage: `url('/illustration/hero_bg.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }} className=" w-full text-white h-full rounded-lg flex flex-col items-center justify-center gap-y-4 py-20">
          <Typography.Title style={{ color: '#fff', fontSize: heroTitleResponsive(), margin: 0 }} className="hero-title text-center">
            Bangkit Digital Gorontalo
          </Typography.Title>
          <p className="text-xs lg:text-3xl font-body_type mb-2 max-w-[18rem] lg:max-w-5xl text-center">
            Memberdayakan UMKM dengan aplikasi mobile inovatif, solusi web, dan pemasaran media digital.
          </p>
          <div className="inline-flex items-center gap-x-2 lg:gap-x-4 mb-8">
            <div className="w-12 h-10 lg:h-16 lg:w-20 bg-navyBlue rounded-[10px] flex items-center justify-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6" src="/icons/digital_marketing.svg" />
            </div>
            <div className="w-12 h-10 lg:h-16 lg:w-20 bg-navyBlue rounded-[10px] flex items-center justify-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6" src="/icons/digital_operation.svg" />
            </div>
            <div className="w-12 h-10 lg:h-16 lg:w-20 bg-navyBlue rounded-[10px] flex items-center justify-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6" src="/icons/digital_media.svg" />
            </div>
            <div className="w-12 h-10 lg:h-16 lg:w-20 bg-navyBlue rounded-[10px] flex items-center justify-center">
              <img className="w-4 h-4 lg:w-6 lg:h-6" src="/icons/education.svg" />
            </div>
          </div>
          <Button size="large" variant="solid">
            Konsultasi Sekarang
          </Button>
        </div>
        <div className="w-full flex lg:flex-row flex-col px-4 gap-y-6">
          <div className="flex flex-[3]">
            <p className="font-heading text-3xl  lg:text-5xl">
              Ingin Bisnis Anda Melejit dengan Teknologi? Temukan Rahasianya <span className="text-navyBlue">BADIGO!</span>
            </p>
          </div>
          <div className="flex flex-[2]">
            <p className="font-body_type text-sm lg:text-xl">
              Bangkit Digital Gorontalo (BADIGO) adalah mitra transformasi digital  Anda. Kami menawarkan solusi khusus untuk percepatan bisnis, fokus pada  UMKM lokal di Gorontalo dan sekitarnya, dengan visi menghadirkan solusi teknologi digital modern untuk masa depan
            </p>
          </div>
        </div>
      </section>
      <section id="tentang" className="w-full max-w-screen-2xl mx-auto px-6 lg:px-20 pt-12 lg:pt-24 pb-32 flex flex-col gap-y-12 items-center justify-center ">
        <Typography.Title level={2} style={{ fontSize: subtitleResponsive() }}>
          Misi Kami
        </Typography.Title>
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center ">
          <div className="w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <BiSolidUserVoice className="text-3xl" />
              </div>
              <span className="font-heading text-3xl">Inovasi</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
          <div className="w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <BiShoppingBag className="text-3xl" />
              </div>
              <span className="font-heading text-3xl break-words">
                Pem<wbr />berdayaan
              </span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
          <div className="w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <BiSolidGraduation className="text-3xl" />
              </div>
              <span className="font-heading text-3xl">Edukasi</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
        </div>
      </section>
      <section id="layanan" className="w-full max-w-screen-2xl mx-auto px-6 lg:px-20 flex  flex-col lg:flex-row gap-y-12  justify-center">
        <div className="w-full flex flex-[2] relative ">
          <div className="w-full flex flex-col gap-y-4 items-center lg:items-start">
            <Typography.Title level={2} style={{ margin: 0, fontSize: subtitleResponsive() }} className="text-center lg:text-center">
              Layanan Kami
            </Typography.Title>
            <span className="font-heading text-base lg:text-2xl mb-6 text-center lg:text-left">
              Tertarik dengan Layanan Kami?
              <br />
              Hubungi Sekarang!
            </span>
            <Button className="w-fit lg:text-lg lg:p-8" size="large" color="primary" variant="solid" >
              Coba Sekarang
            </Button>
          </div>
          <img src="illustration/layanan_kami.png" className="absolute hidden lg:block bottom-0" />
        </div>
        <div className="w-full flex-[3] grid grid-cols-2 lg:ms-24 gap-x-6 gap-y-2 pb-28">
          <div className="h-fit col-span-2 lg:col-span-1 w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  ">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <img className="w-6 h-6" src="/icons/digital_marketing.svg" />
              </div>
              <span className="font-heading text-lg lg:text-3xl">Digital Marketing</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
          <div className="lg:mt-12 h-fit col-span-2 lg:col-span-1 w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <img className="w-6 h-6" src="/icons/digital_media.svg" />
              </div>
              <span className="font-heading text-lg lg:text-3xl">Digital Media</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
          <div className="h-fit col-span-2 lg:col-span-1  w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <img className="w-6 h-6" src="/icons/digital_operation.svg" />
              </div>
              <span className="font-heading text-lg lg:text-3xl">Digital Operation</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
          <div className="lg:mt-12 h-fit col-span-2 lg:col-span-1 w-full flex flex-col gap-y-8 bg-white rounded-3xl shadow-xl border border-gray-100  r">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon bg-navyBlue rounded-[10px] flex items-center justify-center text-white">
                <img className="w-6 h-6" src="/icons/education.svg" />
              </div>
              <span className="font-heading text-lg lg:text-3xl">Digital Learning</span>
            </div>
            <hr className="border-color-blue-700" />
            <p className="font-body_type px-8 pb-6 text-sm">Inovasi dalam memberikan Solusi teknologi digital bagi Masyarakat sebagai bagian dari ikut serta dalam membangun sistem teknologi informasi.</p>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url('/illustration/hero_bg.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }} >
        <div className="w-full max-w-screen-2xl mx-auto px-8 lg:px-32 py-24 flex flex-col gap-y-12 justify-center items-center">
          <Typography.Title level={2} style={{ fontSize: smallSubtitleResponsive, color: '#fff' }} className="text-center">
            Kenapa Pilih BADIGO?
          </Typography.Title>
          <div className="flex flex-wrap gap-6 lg:gap-12 items-center justify-center">
            <div className="flex items-center p-5 bg-white rounded-sm gap-x-4 lg:gap-x-10 flex-grow">
              <div className="w-20 h-16 lg:w-28 lg:h-24 bg-[#DDEEFF] rounded-[10px] flex items-center justify-center text-[#1C4DFF]">
                <BiBriefcase className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-heading text-lg lg:text-3xl">
                  Inovatif
                </span>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">
                  Menciptakan ide baru, produk berteknologi terbaik untuk nilai tambah, keamanan, dan skalabilitas pelanggan.
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-white rounded-sm gap-x-4 lg:gap-x-10 flex-grow">
              <div className="w-20 h-16 lg:w-28 lg:h-24 bg-[#FFE5CC] rounded-[10px] flex items-center justify-center text-[#FF952C]">
                <BiBadgeCheck className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-heading text-lg lg:text-3xl">
                  Profesional
                </span>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">
                  Prioritaskan kebutuhan pengguna dengan pendekatan berbasis data untuk memahami perilaku mereka.
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-white rounded-sm gap-x-4 lg:gap-x-10 flex-grow">
              <div className="w-20 h-16 lg:w-28 lg:h-24 bg-[#D0FFDC] rounded-[10px] flex items-center justify-center text-[#34C759]">
                <BiGroup className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-heading text-lg lg:text-3xl">
                  Kolaboratif
                </span>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">
                  Mendorong kerja sama tim lintas disiplin dan hubungan dengan mitra strategis untuk tujuan bersama.
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-white rounded-sm gap-x-4 lg:gap-x-10 flex-grow">
              <div className="w-20 h-16 lg:w-28 lg:h-24 bg-[#BCDFFF] rounded-[10px] flex items-center justify-center text-[#233E57]">
                <BiLockAlt className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-heading text-lg lg:text-3xl">
                  Integritas
                </span>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">
                  Mengutamakan kejujuran dalam komunikasi dan mengelola data pelanggan secara etis sesuai peraturan.
                </p>
              </div>
            </div>
            <div className="flex items-center p-5 bg-white rounded-sm gap-x-4 lg:gap-x-10 flex-grow">
              <div className="w-20 h-16 lg:w-28 lg:h-24 bg-[#FFFFD5] rounded-[10px] flex items-center justify-center text-[#FFD900]">
                <BiChevronsRight className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-heading text-lg lg:text-3xl">
                  Keberlanjutan
                </span>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">
                  Dorong keterampilan tim, respons pasar cepat, dan pelatihan teknologi untuk relevansi industri.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="kontak" className="w-full max-w-screen-2xl mx-auto px-8 lg:px-32 py-24 flex flex-col lg:flex-row justify-center gap-x-24 gap-y-12">
        <div className="flex flex-col flex-1 gap-y-2">
          <span className="font-heading text-[#2401D6] text-xl lg:text-2xl">
            Hubungi Kami Sekarang
          </span>
          <Typography.Title style={{ margin: 0, fontSize: subtitleResponsive() }}>
            Konsultasi Kebutuhan Digital Anda Dengan Kami
          </Typography.Title>
          <p className="font-body_type text-sm lg:text-base">
            Tim kami siap mendengarkan kebutuhan digital Anda dan memberikan solusi terbaik. Berkolaborasi untuk masa depan digital bersama BADIGO!
          </p>
          <div className="flex flex-col gap-y-4 mt-6 mb-12">
            <div className="flex items-center gap-x-4">
              <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#2401D6] rounded-full flex items-center justify-center text-white">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <span className="font-body_type text-xs lg:text-base">
                Konsultasi disesuaikan dengan kebutuhan bisnis.
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#2401D6] rounded-full flex items-center justify-center text-white">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <span className="font-body_type text-xs lg:text-base">
                Didukung oleh ahli digital lokal Gorontalo.
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#2401D6] rounded-full flex items-center justify-center text-white">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <span className="font-body_type text-xs lg:text-base">
                Strategi yang efektif untuk pertumbuhan bisnis .
              </span>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="w-4 h-4 lg:w-8 lg:h-8 bg-[#2401D6] rounded-full flex items-center justify-center text-white">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <span className="font-body_type text-xs lg:text-base">
                Dukungan berkelanjutan hingga bisnis bertumbuh,
              </span>
            </div>
          </div>
          <Button className="w-fit lg:text-lg lg:p-8" size="large" color="primary" variant="solid" >
            Konsultasi Sekarang
          </Button>
        </div>
        <div className="flex flex-col flex-1">
          <span className="font-heading text-2xl lg:text-4xl mb-6">
            Cara Kami Bekerja
          </span>
          <div className="flex flex-col gap-y-4 ">
            <div className="inline-flex items-center p-6 bg-white gap-x-6 border border-gray-100 shadow-md rounded-sm">
              <div className="border-2 border-[#34C759] rounded-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center border-4 border-[#D0FFDC] bg-[#34C759] text-white rounded-full">
                  <BiChat className="text-lg lg:text-3xl" />
                </div>
              </div>
              <dib>
                <span className="font-heading text-lg lg:text-xl">Konsultasi</span>
                <p className="font-body_type text-sm lg:text-base">Ceritakan kebutuhan digital Anda kepada tim kami untuk solusi yang tepat.</p>
              </dib>
            </div>
            <div className="inline-flex items-center p-6 bg-white gap-x-6 border border-gray-100 shadow-md rounded-sm">
              <div className="border-2 border-[#F4C91D] rounded-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center border-4 border-[#FFF0B5] bg-[#F4C91D] text-white rounded-full">
                  <BiChat className="text-lg lg:text-3xl" />
                </div>
              </div>
              <dib>
                <span className="font-heading text-lg lg:text-xl">Negosiasi</span>
                <p className="font-body_type text-sm lg:text-base">Diskusikan detail proyek dan biaya yang sesuai dengan anggaran Anda.</p>
              </dib>
            </div>
            <div className="inline-flex items-center p-6 bg-white gap-x-6 border border-gray-100 shadow-md rounded-sm">
              <div className="border-2 border-[#0084FF] rounded-full">
                <div className="w-10 h-10 lg:w-16 lg:h-16 flex items-center justify-center border-4 border-[#7DC0FF] bg-[#0084FF] text-white rounded-full">
                  <BiChat className="text-lg lg:text-3xl" />
                </div>
              </div>
              <dib>
                <span className="font-heading text-lg lg:text-xl">Sepakati</span>
                <p className="font-body_type text-sm lg:text-base">Diskusikan detail proyek dan biaya yang sesuai dengan anggaran Anda.</p>
              </dib>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full max-w-screen-2xl mx-auto px-8 lg:px-20 pt-24 pb-32 flex flex-col gap-y-12 items-center justify-center ">
        <Typography.Title level={2} style={{ fontSize: subtitleResponsive() }}>
          Produk Kami
        </Typography.Title>
        <div className="w-full grid grid-cols-3">
          <div className="col-span-3 lg:col-span-1 p-4 inline-flex gap-x-4 bg-white border border-t-gray-100 rounded-sm shadow-lg">
            <div className="w-full h-full flex-[1]">
              <img src="/govillage.png" className="h-full w-full rounded-sm object-cover" />
            </div>
            <div className="flex flex-col gap-y-2 flex-[2]">
              <span className="font-heading text-lg lg:text-2xl">GoVillage</span>
              <p className="text-xs lg:text-sm font-body_type">Sistem informasi desa untuk layanan mudah seperti Permohonan Surat, Lapor Penduduk, Pengaduan, dan Lapak BumDes, dengan akses digital.</p>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home