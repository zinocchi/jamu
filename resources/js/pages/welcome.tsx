import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import ConsultationLayout from '@/layouts/consultation';
import { Head } from '@inertiajs/react';
import { HandCoins, ShoppingBag, Vegan } from 'lucide-react';



export default function Welcome() {
    return (
        <div className="bg-[#f9f5f0]">
            <div
                className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(/images/hero-bg.png)` }}
            >
                <Head title="Jamu!" />
                <div className="flex h-16 w-full items-center justify-between gap-4 bg-black/25 px-16 text-sm font-semibold text-white shadow-2xl shadow-black/40 backdrop-blur-lg">
                    <a href="">TESTIMONI</a>
                    <a href="">PRODUK</a>
                    <a href="/">
                        <img
                            src="/images/logo-jamu.png"
                            alt="Logo Jamu!"
                            className="h-28 w-auto"
                        />
                    </a>
                    <a href="">TENTANG KAMI</a>
                    <a href="">KONTAK</a>
                </div>
                <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center text-white">
                    <h1 className="mb-2 max-w-3xl font-Yusei text-2xl md:text-6xl">
                        Jamu sehat dari dapur kami untuk keluarga anda
                    </h1>
                    <button className="mt-6 rounded bg-[#f87108] px-6 py-3 font-bold text-white shadow-lg shadow-[#f87108]/50 transition hover:bg-orange-600/90 hover:shadow-orange-600/40">
                        CEK KESEHATAN ANDA
                    </button>
                </div>
            </div>

            {/* Section Fitur */}
            <div className="mx-12 flex flex-row justify-between gap-8 py-24 text-center">
                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <HandCoins className="mx-auto h-16 w-16 text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            harga bersahabat
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Nikmati jamu sehat dengan harga ramah di kantong,
                            cocok buat sehari-hari.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <Vegan className="mx-auto h-16 w-16 text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            segar dan alami
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Diracik langsung dari rempah pilihan, bikin tubuh
                            makin fit dan berenergi.
                        </CardDescription>
                    </CardHeader>
                </Card>

                <Card className="w-xl border-none bg-white py-12 font-[Open_sans] text-[#f87108]">
                    <ShoppingBag className="mx-auto h-16 w-16 text-[#f87108]" />
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold uppercase">
                            varian lengkap
                        </CardTitle>
                        <CardDescription className="mt-2 text-center text-[#575050]">
                            Dari kunyit asam sampai beras kencur, banyak pilihan
                            rasa yang bisa nemenin gaya hidupmu.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>

            {/* Section Tentang Kami */}
            <div className="flex flex-col items-center justify-center gap-12 py-12">
                <h1 className="text-center font-[Open_sans] text-5xl font-bold text-[#f87108] uppercase">
                    sekilas <br />
                    tentang kami
                </h1>
                <Card className="max-w-5xl min-w-xl border-none bg-[#963f16] p-8 font-[Open_sans] font-semibold">
                    <CardDescription className="text-[18px] text-white">
                        Kami adalah UMKM lokal yang menghadirkan jamu sebagai
                        minuman sehari-hari anak muda, bukan sekadar warisan
                        tradisi tapi juga gaya hidup sehat yang kekinian. Dengan
                        bahan-bahan alami seperti kunyit, jahe, dan rempah
                        pilihan, kami percaya bahwa sehat itu harus bisa
                        dinikmati dengan cara yang simple, enak, dan cocok buat
                        rutinitas modern.
                    </CardDescription>
                </Card>
            </div>

            <ConsultationLayout />

            {/* Section NO SHORTCUTS & Produk */}
            <div className="mt-28 bg-white py-16">
                <div className="text-center">
                    <h1 className="font-[Open_sans] text-5xl font-black text-[#963f16]">
                        NO SHORTCUTS
                    </h1>
                    <p className="text-4xl font-light text-[#963f16]">
                        Just authentic, natural jamu.
                    </p>
                </div>

                {/* Section Produk */}
                <div className="mt-16 px-8">
                    <div className="text-center">
                        <h2 className="mb-2 font-[Open_sans] text-4xl font-bold text-[#f87108] uppercase">
                            CORA PRODUK KAMI
                        </h2>
                        <h3 className="mb-8 font-[Open_sans] text-3xl font-bold text-[#f87108] uppercase">
                            PRODUK KAMI
                        </h3>
                    </div>

                    {/* Grid Produk - 3 Gambar Berjejer */}
                    <div className="mx-auto max-w-6xl">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            {/* Produk 1 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 h-80 w-80 overflow-hidden rounded-full border-4 border-[#f87108] bg-white p-2">
                                    <img
                                        src="../../images/jamu/jamuNoShortcuts.png"
                                        alt="Produk Jamu 1"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Produk 2 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 h-80 w-80 overflow-hidden rounded-full border-4 border-[#f87108] bg-white p-2">
                                    <img
                                        src="../../images/jamu/jamuNoShortcuts2.png"
                                        alt="Produk Jamu 2"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Produk 3 */}
                            <div className="flex flex-col items-center">
                                <div className="mb-4 h-80 w-80 overflow-hidden rounded-full border-4 border-[#f87108] bg-white p-2">
                                    <img
                                        src="../../images/jamu/jamuNoShortcuts3.png"
                                        alt="Produk Jamu 3"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#963f16] py-8 text-center text-white">
                <p>© 2024 Jamu! - All rights reserved</p>
            </div>
        </div>
    );
}
