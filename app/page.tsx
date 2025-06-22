"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Clock, Target, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* University Header */}
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto flex items-center justify-between gap-4">
          {/* Left Logo */}
          <div className="w-16 h-16  flex items-center justify-center overflow-hidden">
            <Image
              src="/uin.jpeg?height=64&width=64"
              alt="Logo UIN"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="text-center">
            <h3 className="font-semibold text-gray-800">Pengembangan Teknologi dan Inovasi Konseling</h3>
            <p className="text-sm text-gray-600">
              Program Studi Bimbingan dan Konseling UIN Sultan Maulana Hasanuddin Banten
            </p>
          </div>

          {/* Right Logo */}
          <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo2.jpg?height=64&width=64"
              alt="Logo BK"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Welcome Content */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Selamat Datang di <span className="text-blue-600">TimeMate!</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Teman baru kamu buat ngatur waktu biar hidup nggak cuma sibuk, tapi juga seimbang dan bermakna.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Pernah ngerasa hari-hari kamu berlalu gitu aja? Banyak yang harus dikerjain, tapi waktu terasa nggak
                cukup? Tenang, kamu nggak sendirian.
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Di sinilah TimeMate hadir.</strong>
              </p>
              <p className="text-gray-700">
                TimeMate adalah website manajemen waktu yang dibuat khusus buat nemenin kamu ngatur aktivitas harian,
                bikin tujuan hidup lebih jelas, dan kasih ruang buat refleksi diri. Semua dibalut dengan cara yang
                simpel, seru, dan penuh semangat!
              </p>
            </div>

            {/* Feature Preview */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Daily Tracker</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Goal Setter</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Weekly Reflection</p>
              </div>
            </div>
          </div>

          {/* User Identity Form */}
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Identitas Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Nama</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Masukkan nama kamu"
                />
              </div>

              <div>
                <Label htmlFor="age">Usia</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange("age", e.target.value)}
                  placeholder="Masukkan usia kamu"
                />
              </div>

              <div>
                <Label htmlFor="gender">Jenis Kelamin</Label>
                <Select onValueChange={(value) => handleInputChange("gender", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis kelamin" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="laki-laki">Laki-laki</SelectItem>
                    <SelectItem value="perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Masukkan email kamu"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-8">
          <Link href="/features">
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
