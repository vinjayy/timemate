"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Sun, Target, RotateCcw, Save } from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  const [dailyActivities, setDailyActivities] = useState("")
  const [todoList, setTodoList] = useState("")
  const [weeklyGoals, setWeeklyGoals] = useState("")
  const [reflectionAnswers, setReflectionAnswers] = useState<boolean[]>(new Array(7).fill(false))

  const timeSlots = Array.from({ length: 17 }, (_, i) => {
    const hour = i + 6
    return `${hour.toString().padStart(2, "0")}:00`
  })

  const reflectionQuestions = [
    "Apakah kamu merasa puas dengan cara kamu mengatur waktu minggu ini?",
    "Apakah kamu berhasil menyelesaikan sebagian besar tugas yang kamu rencanakan?",
    "Apakah kamu menghindari aktivitas yang bikin kamu stres berlebihan?",
    "Apakah kamu punya waktu buat melakukan hal yang kamu suka?",
    'Apakah kamu bisa bilang "tidak" ke hal-hal yang bukan prioritasmu minggu ini?',
    "Apakah kamu belajar sesuatu yang baru minggu ini meski cuma hal kecil?",
    "Apakah kamu mencoba memperbaiki kebiasaan buruk dan mulai kebiasaan baik?",
  ]

  const handleReflectionChange = (index: number, checked: boolean) => {
    const newAnswers = [...reflectionAnswers]
    newAnswers[index] = checked
    setReflectionAnswers(newAnswers)
  }

  const saveData = (feature: string) => {
    alert(`Data ${feature} berhasil disimpan!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-sm p-4 border-b">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800">Fitur-Fitur Seru di TimeMate</h1>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Daily Time Tracker */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sun className="w-8 h-8 text-yellow-500" />
              <CardTitle className="text-2xl">Daily Time Tracker</CardTitle>
            </div>
            <p className="text-gray-600">
              Pantau aktivitas harian kamu. Mulai dari yang kecil kayak minum air putih sampai deadline penting—semua
              bisa kamu catat dan cek setiap hari. Biar hari kamu lebih terarah dan nggak ada yang kelewat!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Tulis kegiatan-kegiatan kamu dalam sehari:</label>
              <Textarea
                value={dailyActivities}
                onChange={(e) => setDailyActivities(e.target.value)}
                placeholder="Contoh: Bangun tidur, sarapan, kuliah, olahraga, belajar, dll..."
                rows={4}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              {/* Time Schedule */}
              <div>
                <h3 className="font-semibold mb-3">Jadwal Per Jam (06:00 - 22:00)</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {timeSlots.map((time) => (
                    <div key={time} className="flex items-center gap-2">
                      <span className="w-16 text-sm font-mono">{time}</span>
                      <Input placeholder="Kegiatan..." className="flex-1" />
                    </div>
                  ))}
                </div>
              </div>

              {/* To-Do List */}
              <div>
                <h3 className="font-semibold mb-3">To-Do List</h3>
                <Textarea
                  value={todoList}
                  onChange={(e) => setTodoList(e.target.value)}
                  placeholder="• Tugas kuliah&#10;• Belanja bulanan&#10;• Olahraga&#10;• Baca buku"
                  rows={10}
                />
              </div>
            </div>

            <Button onClick={() => saveData("Daily Time Tracker")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Simpan Daily Tracker
            </Button>
          </CardContent>
        </Card>

        {/* Goal Setter */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Target className="w-8 h-8 text-green-500" />
              <CardTitle className="text-2xl">Goal Setter</CardTitle>
            </div>
            <p className="text-gray-600">
              Mau mulai kebiasaan baru? Atau ada impian yang pengen kamu kejar? Yuk, susun tujuanmu di sini. TimeMate
              bantu kamu bikin langkah-langkahnya satu per satu. Pelan-pelan, asal konsisten 💪
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Goals Perminggu:</label>
              <Textarea
                value={weeklyGoals}
                onChange={(e) => setWeeklyGoals(e.target.value)}
                placeholder="Contoh:&#10;• Olahraga 3x seminggu&#10;• Baca 1 buku&#10;• Selesaikan project kuliah&#10;• Belajar skill baru"
                rows={6}
              />
            </div>
            <Button onClick={() => saveData("Goal Setter")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Simpan Goals
            </Button>
          </CardContent>
        </Card>

        {/* Weekly Reflection */}
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <RotateCcw className="w-8 h-8 text-purple-500" />
              <CardTitle className="text-2xl">Weekly Reflection</CardTitle>
            </div>
            <p className="text-gray-600">
              Akhir pekan bukan cuma buat rebahan, tapi juga saat yang pas buat ngaca ke diri sendiri. Fitur ini bantu
              kamu ngecek refleksi mingguan kamu dengan kuis interaktif.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {reflectionQuestions.map((question, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <Checkbox
                  id={`question-${index}`}
                  checked={reflectionAnswers[index]}
                  onCheckedChange={(checked) => handleReflectionChange(index, checked as boolean)}
                />
                <label htmlFor={`question-${index}`} className="text-sm leading-relaxed cursor-pointer">
                  {index + 1}. {question}
                </label>
              </div>
            ))}
            <Button onClick={() => saveData("Weekly Reflection")} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Simpan Refleksi
            </Button>
          </CardContent>
        </Card>

        {/* Next Button */}
        <div className="flex justify-end">
          <Link href="/tips">
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
