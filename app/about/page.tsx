"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Heart, Users, BookOpen } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const saveData = () => {
    alert("Terima kasih sudah mengunjungi TimeMate! Data berhasil disimpan.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800">Tentang Kami</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Main Story */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-red-500" />
              Cerita di balik TimeMate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-lg">
                <strong>Haii! 👋</strong> Kami adalah mahasiswa dari Program Studi Bimbingan dan Konseling di UIN Sultan
                Maulana Hasanuddin Banten 🎓
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  Website ini kami buat sebagai tugas akhir dari mata kuliah{" "}
                  <strong>Pengembangan Teknologi dan Inovasi Konseling</strong> yang dibimbing langsung oleh dosen kami
                  tercinta, <strong>Bapak Ahmad Rofi Suryahadikusumah, M.Pd</strong> 🧑🏻‍🏫
                </p>
              </div>

              <p className="text-gray-700">
                Dari situ, kami ngobrol dan wawancara langsung sama lima orang yang punya cerita beda-beda soal
                manajemen waktu.
              </p>
            </div>

            {/* Interview Documentation */}
            <div className="flex justify-center">
              <div className="text-center max-w-2xl">
                <Image
                  src="/WhatsApp Image 2025-06-23 at 12.41.36 AM.jpeg?height=360&width=640"
                  alt="Dokumentasi Wawancara"
                  width={640}
                  height={360}
                  className="rounded-lg shadow-md mx-auto"
                />
                <p className="text-sm text-gray-600 mt-3">Dokumentasi Wawancara dengan Responden</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>
                  Ternyata, banyak yang ngerasa overwhelmed, bingung mulai dari mana, atau bahkan nggak sadar waktu udah
                  kebuang begitu aja.
                </strong>
              </p>
              <p className="text-gray-700 text-center mt-2">
                Dari situlah muncul ide: gimana kalau kita bikin sesuatu yang bisa bantu? Sesuatu yang ringan,
                menyenangkan, tapi juga bermanfaat.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Mission Statement */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Misi Kami
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center text-lg">
                Web ini kami rancang sebagai <strong>media bimbingan interaktif bertema manajemen waktu</strong> ⏳
              </p>
              <p className="text-gray-700 text-center mt-3">
                Karena kami percaya...{" "}
                <strong>
                  mengelola waktu itu bukan cuma soal jadwal, tapi juga soal prioritas, kebiasaan, dan kedisiplinan diri
                </strong>{" "}
                🧠💡
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Yang Kami Tawarkan:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Kuis interaktif untuk refleksi diri</li>
                  <li>• Tools manajemen waktu yang mudah digunakan</li>
                  <li>• Materi singkat dari para ahli</li>
                  <li>• Fitur goal setting yang memotivasi</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">Tujuan Kami:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Membantu mengatur waktu dengan lebih baik</li>
                  <li>• Meningkatkan kesadaran diri</li>
                  <li>• Membangun kebiasaan positif</li>
                  <li>• Menciptakan keseimbangan hidup</li>
                </ul>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-pink-50 to-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 text-lg">
                Lewat fitur-fitur seru di web ini — mulai dari kuis, game ringan, materi singkat, sampai refleksi diri —
                kami ingin bantu teman-teman semua biar makin paham dan semangat buat mengatur waktu sebaik mungkin!
                ⏰✨
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Team Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="w-6 h-6 text-green-600" />
              Tim Pengembang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">Program Studi Bimbingan dan Konseling</h3>
                <p className="text-gray-700">UIN Sultan Maulana Hasanuddin Banten</p>
                <p className="text-sm text-gray-600 mt-2">Mata Kuliah: Pengembangan Teknologi dan Inovasi Konseling</p>
                <p className="text-sm text-gray-600">Dosen Pembimbing: Bapak Ahmad Rofi Suryahadikusumah, M.Pd</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Metodologi Penelitian</h4>
                  <p className="text-sm text-gray-600">Wawancara mendalam dengan 5 responden</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Pendekatan</h4>
                  <p className="text-sm text-gray-600">Bimbingan interaktif berbasis teknologi</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing Message */}
        <Card>
          <CardContent className="text-center py-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Semoga website ini bisa jadi teman yang menyenangkan dan bermanfaat buat kamu yaa 💛
              </h2>
              <p className="text-lg text-gray-600">Terima kasih udah mampir dan selamat eksplor!</p>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-lg mt-6">
                <p className="text-sm text-gray-700">
                  <strong>Reminder:</strong> Setiap hari Minggu, kamu akan menerima email pengingat untuk mengunjungi
                  TimeMate dan merencanakan minggu yang lebih produktif! 📧✨
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <div className="text-center">
          <Button onClick={saveData} size="lg" className="bg-green-600 hover:bg-green-700">
            <Save className="w-4 h-4 mr-2" />
            Simpan & Selesai
          </Button>
        </div>
      </main>
    </div>
  )
}
