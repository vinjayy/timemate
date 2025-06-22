"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TipsPage() {
  const books = [
    {
      title: "Time is Money",
      author: "Agnes Chin",
      image: "/buku-self-improvement-time-is-monkey-agnes-chin.jpg?height=200&width=150",
      synopsis: "Panduan praktis mengelola waktu untuk mencapai kesuksesan finansial dan personal.",
    },
    {
      title: "Kimchi Confession",
      author: "Xaviera Putri",
      image: "/3qb8mqkoajoypunndzhczx.jpg?height=200&width=150",
      synopsis: "Pengalaman belajar di Korea dan tips produktivitas dari mahasiswa berprestasi.",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image: "/9786020633176_.Atomic_Habit.jpg?height=200&width=150",
      synopsis: "Cara membangun kebiasaan baik dan menghilangkan kebiasaan buruk dengan perubahan kecil.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800">Tips Manajemen Waktu</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Rest of the content remains the same */}
        {/* Maudy Ayunda */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center">
                <Image
                  src="/Maudy-Ayunda.jpg?height=80&width=80"
                  alt="Maudy Ayunda"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <CardTitle className="text-xl">Maudy Ayunda</CardTitle>
                <p className="text-sm text-gray-600">
                  Lulusan Universitas Oxford (PPE: Philosophy, Politics, and Economics) dan sempat melanjutkan studi S2
                  di Stanford University.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Tips Manajemen Waktu dari Maudy:</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800">Menentukan Skala Prioritas</h4>
                <p className="text-sm text-gray-700">
                  Maudy sangat percaya pada pentingnya prioritizing, atau memilah mana hal yang penting dan mendesak. Ia
                  memetakan kegiatan yang benar-benar penting dan berdampak jangka panjang.
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800">Time Blocking dan To-Do List</h4>
                <p className="text-sm text-gray-700">
                  Maudy biasa menggunakan teknik time blocking, yaitu menjadwalkan waktunya per blok (contoh:
                  08.00–10.00 untuk membaca, 10.00–12.00 untuk kerja tim, dll).
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800">Menghindari Multitasking</h4>
                <p className="text-sm text-gray-700">
                  Meskipun sering terlihat mengerjakan banyak hal sekaligus, Maudy justru menekankan pentingnya fokus
                  satu per satu (single-tasking).
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800">Self-Discipline dan Mindful Break</h4>
                <p className="text-sm text-gray-700">
                  Maudy percaya bahwa istirahat yang mindful (seperti journaling, olahraga, atau meditasi) membantu
                  mengisi ulang energi dan menjaga kesehatan mental.
                </p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h4 className="font-semibold text-pink-800">Menggunakan Teknologi dengan Bijak</h4>
                <p className="text-sm text-gray-700">
                  Maudy menggunakan aplikasi seperti Google Calendar dan Notion untuk mengatur agenda.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Elon Musk */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <Image
                  src="/CNhZzYY.jpg?height=80&width=80"
                  alt="Elon Musk"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <CardTitle className="text-xl">Elon Musk</CardTitle>
                <p className="text-sm text-gray-600">
                  Pebisnis yang mendirikan SpaceX, Tesla, The Boring Company, Neuralink, dan OpenAI. Dengan pendapatan
                  mencapai US$240 miliar, dianggap sebagai orang terkaya di dunia.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Tips Manajemen Waktu ala Elon Musk:</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Time Blocking System / "5-Minute Rule"</h4>
                <p className="text-sm text-gray-700">
                  Ia membagi harinya dalam blok waktu 5 menit. Jadi setiap 5 menit sudah harus tahu ngapain, ketemu
                  siapa, ngerjain tugas apa.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Prioritaskan Berdasarkan Dampak</h4>
                <p className="text-sm text-gray-700">
                  Elon memilih tugas-tugas yang punya dampak besar dan berani delegasi sisanya ke timnya. Filosofi ini
                  mirip dengan Prinsip Pareto (80/20 Rule).
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Batching Tugas</h4>
                <p className="text-sm text-gray-700">
                  Mengelompokkan tugas-tugas sejenis agar dikerjakan dalam satu waktu, supaya otak nggak bolak-balik
                  switching focus.
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Self-Reflection dan Feedback</h4>
                <p className="text-sm text-gray-700">
                  Setiap malam atau setiap akhir minggu, Musk melakukan semacam evaluasi diri untuk refleksi efisiensi
                  waktu.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Xaviera Putri */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center">
                <Image
                  src="/images (3).jpg?height=80&width=80"
                  alt="Xaviera Putri"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <div>
                <CardTitle className="text-xl">Xaviera Putri</CardTitle>
                <p className="text-sm text-gray-600">
                  Mahasiswi berprestasi yang menyelesaikan pendidikan S1 di KAIST dengan double major di bidang Computer
                  Science dan Business Technology Management.
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-semibold text-lg">Strategi Manajemen Waktu ala Xaviera Putri:</h3>
            <div className="grid gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Metode Pomodoro</h4>
                <p className="text-sm text-gray-700">
                  Belajar selama 50 menit, istirahat 10 menit, diulang beberapa sesi.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Journaling & Perencanaan Harian</h4>
                <p className="text-sm text-gray-700">
                  Membagi halaman menjadi "data bank" + "weekly schedule." Perencanaan untuk besok dilakukan pada malam
                  hari.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Reward Sering & Singkat</h4>
                <p className="text-sm text-gray-700">
                  Setelah beberapa sesi belajar, beri diri sendiri reward kecil (snack, stretching, jalan sebentar).
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Nyicil Lebih Awal ("Nyicil is Power")</h4>
                <p className="text-sm text-gray-700">
                  Jangan tunggu detik terakhir—mulai persiapan ujian minimal dua minggu sebelumnya.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Ganti Suasana Belajar</h4>
                <p className="text-sm text-gray-700">
                  Merasa suntuk? Pindah tempat belajar, stretching, atau refreshing sejenak bisa bikin pikiran kembali
                  fresh.
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800">Satu Hari Kreatif</h4>
                <p className="text-sm text-gray-700">
                  Sisihkan satu hari untuk melakukan hal kreatif: denger musik, jalan–jalan, eksplor ide baru.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Book Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Rekomendasi Buku
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {books.map((book, index) => (
                <div key={index} className="text-center space-y-3">
                  <Image
                    src={book.image || "/placeholder.svg"}
                    alt={book.title}
                    width={150}
                    height={200}
                    className="mx-auto rounded-lg shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold">{book.title}</h4>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className="text-xs text-gray-500 mt-2">{book.synopsis}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="flex justify-end">
          <Link href="/about">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Selanjutnya
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
