import Reveal from '@/components/landing/Reveal';
import { Button, Grid, Typography } from 'antd';
import gsap from 'gsap';
import { useEffect } from 'react';
import { BiBadgeCheck, BiBriefcase, BiChat, BiCheck, BiChevronsRight, BiGroup, BiLockAlt, BiShoppingBag, BiSolidGraduation, BiSolidUserVoice } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';

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

  const [ref, inView] = useInView({
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      const el = document.querySelector('.hero-title');
      if (!el) return;

      const text = new SplitType(el, { types: 'chars' });
      const { chars } = text;

      chars.forEach((char) => {
        char.style.opacity = '0';
        char.style.display = 'inline-block';
        char.style.filter = 'blur(10px)';
        char.style.transform = 'scale(1.2)';
      });

      el.classList.remove('opacity-0', 'invisible');

      gsap.to(chars, {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        duration: 0.6,
        ease: 'power4.out'
      });

      return () => {
        text.revert();
      };
    }
  }, [inView]);

  return (
    <>
      <section id="beranda" className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-y-12 px-4 pb-20 pt-12 lg:px-20 lg:pt-24">
        <div style={{ backgroundImage: `url('/illustration/hero_bg.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-lg py-20 text-white">
          <div className="text-center" ref={ref}>
            <Typography.Title style={{ color: '#fff', fontSize: heroTitleResponsive(), margin: 0 }} className="hero-title invisible opacity-0">
              Bangkit Digital Gorontalo
            </Typography.Title>
          </div>
          <p className="mb-2 max-w-[18rem] text-center font-body_type text-xs lg:max-w-5xl lg:text-3xl">Wujudkan potensi penuh bisnis Anda di era digital. Mari berkolaborasi untuk mencapai tujuan bersama!</p>

          <div className="mb-8 inline-flex items-center gap-x-2 lg:gap-x-4">
            <div className="flex h-10 w-12 items-center justify-center rounded-[10px] bg-navyBlue lg:h-16 lg:w-20">
              <img className="h-4 w-4 lg:h-6 lg:w-6" src="/icons/digital_marketing.svg" />
            </div>
            <div className="flex h-10 w-12 items-center justify-center rounded-[10px] bg-navyBlue lg:h-16 lg:w-20">
              <img className="h-4 w-4 lg:h-6 lg:w-6" src="/icons/digital_operation.svg" />
            </div>
            <div className="flex h-10 w-12 items-center justify-center rounded-[10px] bg-navyBlue lg:h-16 lg:w-20">
              <img className="h-4 w-4 lg:h-6 lg:w-6" src="/icons/digital_media.svg" />
            </div>
            <div className="flex h-10 w-12 items-center justify-center rounded-[10px] bg-navyBlue lg:h-16 lg:w-20">
              <img className="h-4 w-4 lg:h-6 lg:w-6" src="/icons/education.svg" />
            </div>
          </div>
          <Button onClick={() => window.open('https://wa.me/6282195967147', '_blank')} size="large" variant="solid">
            Konsultasi Sekarang
          </Button>
        </div>
        <div className="flex w-full flex-col gap-y-6 px-4 lg:flex-row">
          <div className="flex flex-[3]">
            <p className="font-heading text-3xl lg:text-5xl">
              <Reveal>Ingin Bisnis Anda Melejit dengan Teknologi? Temukan Rahasianya</Reveal>
              <Reveal>
                <span className="text-navyBlue">BADIGO!</span>
              </Reveal>
            </p>
          </div>
          <div className="flex flex-[2]">
            <p className="font-body_type text-sm lg:text-xl">
              <Reveal>
                Bangkit Digital Gorontalo (BADIGO) adalah penyedia Solusi Digital untuk akselerasi bisnis dan perusahaan. BADIGO (Bangkit Digital Gorontalo) lahir dari kebutuhan akan layanan digital yang andal dan integrasi dengan fokus pada
                pengelolaan media sosial, pembuatan website, serta konsultasi IT, guna mendukung transformasi digital di Gorontalo dan Indonesia secara umum.
              </Reveal>
            </p>
          </div>
        </div>
      </section>
      <section id="tentang" className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-y-12 px-6 pb-32 pt-12 lg:px-20 lg:pt-24">
        <Reveal>
          <Typography.Title level={2} style={{ fontSize: subtitleResponsive() }}>
            Misi Kami
          </Typography.Title>
        </Reveal>
        <div className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row">
          <div className="flex w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <BiSolidUserVoice className="text-3xl" />
              </div>
              <Reveal>
                <span className="font-heading text-3xl">Inovasi</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Mendorong inovasi dalam penyediaan solusi teknologi digital sebagai kontribusi aktif dalam pembangunan sistem teknologi informasi di masyarakat.</p>
          </div>
          <div className="flex w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <BiShoppingBag className="text-3xl" />
              </div>
              <Reveal>
                <span className="break-words font-heading text-3xl">
                  Pem
                  <wbr />
                  berdayaan
                </span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Memberikan dukungan digital bagi individu, komunitas, dan institusi dalam meningkatkan produktivitas, efisiensi, dan nilai strategis melalui layanan teknologi informasi.</p>
          </div>
          <div className="flex w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <BiSolidGraduation className="text-3xl" />
              </div>
              <Reveal>
                <span className="font-heading text-3xl">Edukasi</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Meningkatkan literasi digital masyarakat melalui edukasi dan pendampingan agar lebih aktif dan adaptif terhadap perkembangan teknologi.</p>
          </div>
        </div>
      </section>
      <section id="layanan" className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center gap-y-12 px-6 lg:flex-row lg:px-20">
        <div className="relative flex w-full flex-[2]">
          <div className="flex w-full flex-col items-center gap-y-4 lg:items-start">
            <Typography.Title level={2} style={{ margin: 0, fontSize: subtitleResponsive() }} className="text-center lg:text-center">
              <Reveal>Layanan Kami</Reveal>
            </Typography.Title>
            <Reveal>
              <span className="mb-6 text-center font-heading text-base lg:text-left lg:text-2xl">
                Tertarik dengan Layanan Kami?
                <br />
                Hubungi Sekarang!
              </span>
            </Reveal>
            <Button onClick={() => window.open('https://wa.me/6282195967147', '_blank')} className="w-fit lg:p-8 lg:text-lg" size="large" color="primary" variant="solid">
              Coba Sekarang
            </Button>
          </div>
          <img src="illustration/layanan_kami.png" className="absolute bottom-0 hidden lg:block" />
        </div>
        <div className="grid w-full flex-[3] grid-cols-2 gap-x-6 gap-y-2 pb-28 lg:ms-24">
          <div className="col-span-2 flex h-fit w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2 lg:col-span-1">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <img className="h-6 w-6" src="/icons/digital_marketing.svg" />
              </div>
              <Reveal>
                <span className="font-heading text-lg lg:text-3xl">Digital Marketing</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Membangun keterlibatan audiens melalui platform digital dan alat seperti SEO, iklan, dan analitik untuk menarik, meyakinkan, dan mempertahankan pelanggan.</p>
          </div>
          <div className="col-span-2 flex h-fit w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2 lg:col-span-1 lg:mt-12">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <img className="h-6 w-6" src="/icons/digital_media.svg" />
              </div>
              <Reveal>
                <span className="font-heading text-lg lg:text-3xl">Creative Studio</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Pembuatan dan publikasi konten digital untuk pemasaran, seperti foto, video, animasi, dan desain yang digunakan dalam katalog, iklan, blog, buletin, dan media digital lainnya.</p>
          </div>
          <div className="col-span-2 flex h-fit w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2 lg:col-span-1">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <img className="h-6 w-6" src="/icons/digital_operation.svg" />
              </div>
              <Reveal>
                <span className="font-heading text-lg lg:text-3xl">Smart Enterpirse Solution</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Pemanfaatan perangkat pintar, sensor, dan platform terintegrasi untuk meningkatkan visibilitas, respons cepat, dan pengambilan keputusan cerdas dalam proses produksi.</p>
          </div>
          <div className="col-span-2 flex h-fit w-full flex-col gap-y-8 rounded-3xl border border-gray-100 bg-white shadow-xl transition-all hover:-translate-y-2 lg:col-span-1 lg:mt-12">
            <div className="flex items-center gap-x-4 px-8 pt-6">
              <div className="card-icon flex items-center justify-center rounded-[10px] bg-navyBlue text-white">
                <img className="h-6 w-6" src="/icons/education.svg" />
              </div>
              <Reveal>
                <span className="font-heading text-lg lg:text-3xl">Digital Learning</span>
              </Reveal>
            </div>
            <hr className="border-color-blue-700" />
            <p className="px-8 pb-6 font-body_type text-sm">Penggunaan perangkat pintar, sensor, dan platform terintegrasi untuk visibilitas real-time, respons cepat, dan keputusan cerdas dalam produksi.</p>
          </div>
        </div>
      </section>
      <section style={{ backgroundImage: `url('/illustration/hero_bg.png')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-y-12 px-8 py-24 lg:px-32">
          <Typography.Title level={2} style={{ fontSize: smallSubtitleResponsive, color: '#fff' }} className="text-center">
            <Reveal color="#fff">Kenapa Pilih BADIGO?</Reveal>
          </Typography.Title>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-12">
            <div className="flex flex-grow-0 items-center gap-x-4 rounded-sm bg-white p-5 sm:flex-grow md:flex-grow lg:flex-grow-0 lg:gap-x-10">
              <div className="flex h-16 w-20 items-center justify-center rounded-[10px] bg-[#DDEEFF] text-[#1C4DFF] lg:h-24 lg:w-28">
                <BiBriefcase className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Reveal>
                  <span className="font-heading text-lg lg:text-3xl">Inovatif</span>
                </Reveal>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">Menciptakan ide baru, produk berteknologi terbaik untuk nilai tambah, keamanan, dan skalabilitas pelanggan.</p>
              </div>
            </div>
            <div className="flex flex-grow-0 items-center gap-x-4 rounded-sm bg-white p-5 sm:flex-grow md:flex-grow lg:flex-grow-0 lg:gap-x-10">
              <div className="flex h-16 w-20 items-center justify-center rounded-[10px] bg-[#FFE5CC] text-[#FF952C] lg:h-24 lg:w-28">
                <BiBadgeCheck className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Reveal>
                  <span className="font-heading text-lg lg:text-3xl">Profesional</span>
                </Reveal>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">Prioritaskan kebutuhan pengguna dengan pendekatan berbasis data untuk memahami perilaku mereka.</p>
              </div>
            </div>
            <div className="flex flex-grow-0 items-center gap-x-4 rounded-sm bg-white p-5 sm:flex-grow md:flex-grow lg:flex-grow-0 lg:gap-x-10">
              <div className="flex h-16 w-20 items-center justify-center rounded-[10px] bg-[#D0FFDC] text-[#34C759] lg:h-24 lg:w-28">
                <BiGroup className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Reveal>
                  <span className="font-heading text-lg lg:text-3xl">Kolaboratif</span>
                </Reveal>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">Mendorong kerja sama tim lintas disiplin dan hubungan dengan mitra strategis untuk tujuan bersama.</p>
              </div>
            </div>
            <div className="flex flex-grow-0 items-center gap-x-4 rounded-sm bg-white p-5 sm:flex-grow md:flex-grow lg:flex-grow-0 lg:gap-x-10">
              <div className="flex h-16 w-20 items-center justify-center rounded-[10px] bg-[#BCDFFF] text-[#233E57] lg:h-24 lg:w-28">
                <BiLockAlt className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Reveal>
                  <span className="font-heading text-lg lg:text-3xl">Integritas</span>
                </Reveal>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">Mengutamakan kejujuran dalam komunikasi dan mengelola data pelanggan secara etis sesuai peraturan.</p>
              </div>
            </div>
            <div className="flex flex-grow-0 items-center gap-x-4 rounded-sm bg-white p-5 sm:flex-grow md:flex-grow lg:flex-grow-0 lg:gap-x-10">
              <div className="flex h-16 w-20 items-center justify-center rounded-[10px] bg-[#FFFFD5] text-[#FFD900] lg:h-24 lg:w-28">
                <BiChevronsRight className="text-3xl lg:text-6xl" />
              </div>
              <div className="flex flex-col gap-y-1">
                <Reveal>
                  <span className="font-heading text-lg lg:text-3xl">Keberlanjutan</span>
                </Reveal>
                <p className="max-w-sm font-body_type text-xs lg:text-sm">Dorong keterampilan tim, respons pasar cepat, dan pelatihan teknologi untuk relevansi industri.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="kontak" className="mx-auto flex w-full max-w-screen-2xl flex-col justify-center gap-x-24 gap-y-12 px-8 py-24 lg:flex-row lg:px-32">
        <div className="flex flex-1 flex-col gap-y-2">
          <span className="font-heading text-xl text-[#2401D6] lg:text-2xl">Hubungi Kami Sekarang</span>
          <Typography.Title style={{ margin: 0, fontSize: subtitleResponsive() }}>
            <Reveal>Konsultasi</Reveal>
            <Reveal>Kebutuhan Digital</Reveal>
            <Reveal>Anda Dengan Kami</Reveal>
          </Typography.Title>
          <p className="font-body_type text-sm lg:text-base">Tim kami siap mendengarkan kebutuhan digital Anda dan memberikan solusi terbaik. Berkolaborasi untuk masa depan digital bersama BADIGO!</p>
          <div className="mb-12 mt-6 flex flex-col gap-y-4">
            <div className="flex items-center gap-x-4">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2401D6] text-white lg:h-8 lg:w-8">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <Reveal>
                <span className="font-body_type text-xs lg:text-base">Konsultasi disesuaikan dengan kebutuhan bisnis.</span>
              </Reveal>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2401D6] text-white lg:h-8 lg:w-8">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <Reveal>
                <span className="font-body_type text-xs lg:text-base">Didukung oleh ahli digital lokal Gorontalo.</span>
              </Reveal>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2401D6] text-white lg:h-8 lg:w-8">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <Reveal>
                <span className="font-body_type text-xs lg:text-base">Strategi yang efektif untuk pertumbuhan bisnis .</span>
              </Reveal>
            </div>
            <div className="flex items-center gap-x-4">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#2401D6] text-white lg:h-8 lg:w-8">
                <BiCheck className="text-lg lg:text-2xl" />
              </div>
              <Reveal>
                <span className="font-body_type text-xs lg:text-base">Dukungan berkelanjutan hingga bisnis bertumbuh,</span>
              </Reveal>
            </div>
          </div>
          <Button onClick={() => window.open('https://wa.me/6282195967147', '_blank')} className="w-fit lg:p-8 lg:text-lg" size="large" color="primary" variant="solid">
            Konsultasi Sekarang
          </Button>
        </div>
        <div className="flex flex-1 flex-col">
          <span className="mb-6 font-heading text-2xl lg:text-4xl">Cara Kami Bekerja</span>
          <div className="flex flex-col gap-y-4">
            <div className="inline-flex items-center gap-x-6 rounded-sm border border-gray-100 bg-white p-6 shadow-md">
              <div className="rounded-full border-2 border-[#34C759]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#D0FFDC] bg-[#34C759] text-white lg:h-16 lg:w-16">
                  <BiChat className="text-lg lg:text-3xl" />
                </div>
              </div>
              <div>
                <span className="font-heading text-lg lg:text-xl">Konsultasi</span>
                <p className="font-body_type text-sm lg:text-base">Ceritakan kebutuhan digital Anda kepada tim kami untuk solusi yang tepat.</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-x-6 rounded-sm border border-gray-100 bg-white p-6 shadow-md">
              <div className="rounded-full border-2 border-[#F4C91D]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#FFF0B5] bg-[#F4C91D] text-white lg:h-16 lg:w-16">
                  <BiChat className="text-lg lg:text-3xl" />
                </div>
              </div>
              <dib>
                <span className="font-heading text-lg lg:text-xl">Negosiasi</span>
                <p className="font-body_type text-sm lg:text-base">Diskusikan detail proyek dan biaya yang sesuai dengan anggaran Anda.</p>
              </dib>
            </div>
            <div className="inline-flex items-center gap-x-6 rounded-sm border border-gray-100 bg-white p-6 shadow-md">
              <div className="rounded-full border-2 border-[#0084FF]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#7DC0FF] bg-[#0084FF] text-white lg:h-16 lg:w-16">
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
      <section className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-y-12 px-8 pb-32 pt-24 lg:px-20">
        <Reveal>
          <Typography.Title level={2} style={{ fontSize: subtitleResponsive() }}>
            Produk Kami
          </Typography.Title>
        </Reveal>

        <div className="grid w-full grid-cols-3">
          <div className="col-span-3 inline-flex gap-x-4 rounded-sm border border-t-gray-100 bg-white p-4 shadow-lg lg:col-span-1">
            <div className="h-full w-full flex-[1]">
              <img src="/govillage.png" className="h-full w-full rounded-sm object-cover" />
            </div>
            <div className="flex flex-[2] flex-col gap-y-2">
              <a href="https://demo.go-village.id/" target="_blank" rel="noopener noreferrer" className="font-heading text-lg underline lg:text-2xl">
                GoVillage
              </a>
              <p className="font-body_type text-xs lg:text-sm">Sistem informasi desa untuk layanan mudah seperti Permohonan Surat, Lapor Penduduk, Pengaduan, dan Lapak BumDes, dengan akses digital.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
