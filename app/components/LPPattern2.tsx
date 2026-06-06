import { ImageWithFallback } from './ImageWithFallback';
import { Brain, ArrowRight, CheckCircle, Circle } from 'lucide-react';
import brainDiagram from '../../imports/ChatGPT_Image_2026_5_21__12_50_33.png';

export function LPPattern2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5EB] via-white to-[#E8F5E9]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white shadow-md px-5 py-2.5 rounded-full mb-8">
            <Brain className="w-5 h-5 text-[#FF9966]" />
            <span className="text-sm text-gray-600">6月開催 / 徳島県 / クローズド合宿</span>
          </div>

          <h1 className="text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
            自分の脳を知って<br />
            <span className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] bg-clip-text text-transparent">アップデート</span>
          </h1>

          <div className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] px-10 py-5 rounded-2xl inline-block mb-12 shadow-2xl">
            <p className="text-white text-3xl md:text-4xl font-bold">
              通称ー脳合宿！
            </p>
          </div>

          <div className="mb-8">
            <p className="text-2xl text-gray-700">
              合宿を通じてあなただけの<br />
              <span className="text-[#FF9966] font-medium">脳図鑑</span>を完成させます！
            </p>
          </div>

          <p className="text-2xl md:text-3xl text-gray-600 mb-12">
            自分を責める時間を、自分を知る時間に変える。
          </p>

          <div className="max-w-2xl mx-auto mb-12">
            <img
              src={brainDiagram}
              alt="あなたの脳の取扱説明書"
              className="w-full shadow-2xl rounded-3xl border-8 border-white"
            />
            <p className="text-gray-500 mt-6 text-lg">
              ↑ 合宿を通じて、あなただけの取扱説明書を作ります
            </p>
          </div>

          <button className="bg-[#FF9966] hover:bg-[#FF8850] text-white px-12 py-5 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3">
            参加・相談してみる
            <ArrowRight className="w-6 h-6" />
          </button>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-500 text-sm">
              スクロールして詳細を見る ↓
            </p>
          </div>
        </div>
      </section>

      {/* Big Question */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12 text-center">
            <h2 className="text-4xl md:text-5xl text-gray-800 leading-relaxed">
              なぜ、ある言葉に<br />
              強く反応してしまうのか。
            </h2>
            <h2 className="text-4xl md:text-5xl text-gray-800 leading-relaxed">
              なぜ、ある環境では力が出るのに、<br />
              別の環境では疲れてしまうのか。
            </h2>

            <div className="py-12">
              <div className="h-1 w-32 bg-gradient-to-r from-[#FF9966] to-[#66BB6A] mx-auto rounded-full" />
            </div>

            <div className="bg-gradient-to-r from-[#FFF5EB] to-[#E8F5E9] p-12 rounded-3xl">
              <p className="text-3xl md:text-4xl text-gray-800 leading-relaxed">
                それは性格や根性の問題ではなく、<br />
                <span className="text-[#FF9966] font-medium">脳と身体の反応パターン</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual 4 Elements */}
      <section className="py-32 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-20">
            4つの視点から自分を知る
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8F5E9] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative bg-white border-4 border-[#E8F5E9] p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-6">🧠</div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">前頭前野</h3>
                <p className="text-xl text-gray-600 mb-4">考える・整理する・選ぶ</p>
                <p className="text-gray-500">思考や判断を司る部分。ここが疲れると決断できなくなります。</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D0] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative bg-white border-4 border-[#FFE5D0] p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-6">⚠️</div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">扁桃体</h3>
                <p className="text-xl text-gray-600 mb-4">不安・怒り・違和感のセンサー</p>
                <p className="text-gray-500">感情のアラーム。敏感さは「気づく力」でもあります。</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E3F2FD] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative bg-white border-4 border-[#E3F2FD] p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-6">📖</div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">海馬</h3>
                <p className="text-xl text-gray-600 mb-4">記憶・文脈・過去とのつながり</p>
                <p className="text-gray-500">経験を蓄積する場所。過去の記憶が今の反応を作ります。</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFF3E0] to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative bg-white border-4 border-[#FFF3E0] p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="text-6xl mb-6">💓</div>
                <h3 className="text-2xl font-medium mb-4 text-gray-800">自律神経</h3>
                <p className="text-xl text-gray-600 mb-4">戦う・逃げる・固まる・安心する</p>
                <p className="text-gray-500">身体の自動反応。意識より先に動くシステムです。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Flow */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-20">
            たった5つのステップ
          </h2>

          <div className="space-y-8">
            {[
              { title: '反応した出来事を書き出す', icon: '✍️' },
              { title: '身体に起きた反応を見る', icon: '💭' },
              { title: '脳と身体の4要素に当てはめる', icon: '🧩' },
              { title: '弱みを強みに言い換える', icon: '✨' },
              { title: '自分の取扱説明書にまとめる', icon: '📋' },
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-6 p-8 bg-gradient-to-r from-[#FFF5EB] to-white rounded-2xl border-l-4 border-[#FF9966]">
                <span className="text-5xl">{step.icon}</span>
                <div className="flex-1">
                  <div className="text-sm text-[#FF9966] mb-1">STEP {idx + 1}</div>
                  <h3 className="text-2xl text-gray-800">{step.title}</h3>
                </div>
                {idx < 4 && <ArrowRight className="w-8 h-8 text-gray-300" />}
                {idx === 4 && <CheckCircle className="w-8 h-8 text-[#66BB6A]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Simple */}
      <section className="py-32 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-20">
            手に入るもの
          </h2>

          <div className="space-y-6">
            {[
              '自分が反応しやすいことがわかる',
              '疲れやすい環境、力が出る環境が整理できる',
              '弱みだと思っていた反応を強みに変換できる',
              '自分に合う働き方や人間関係のヒントが見つかる',
              '自分の取扱説明書ができる',
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="w-6 h-6 text-[#66BB6A] flex-shrink-0 mt-1" />
                <p className="text-xl text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Info Minimal */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-20">
            開催概要
          </h2>

          <div className="space-y-8 text-center">
            <div>
              <p className="text-sm text-gray-500 mb-2">日程</p>
              <p className="text-2xl text-gray-800">6月開催予定</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <p className="text-sm text-gray-500 mb-2">場所</p>
              <p className="text-2xl text-gray-800">徳島県内</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <p className="text-sm text-gray-500 mb-2">形式</p>
              <p className="text-2xl text-gray-800">知り合い・紹介制のクローズド合宿</p>
            </div>
            <div className="h-px bg-gray-200" />
            <div>
              <p className="text-sm text-gray-500 mb-2">参加費</p>
              <p className="text-2xl text-gray-800">15,000円〜30,000円で調整中</p>
              <p className="text-gray-500 mt-2">宿泊費・食費は実費予定</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-[#FFE5D0] to-[#E8F5E9] rounded-3xl text-center">
            <p className="text-xl text-gray-800">
              少人数で安心して対話できる場にします
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-b from-[#FFF5EB] to-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl text-gray-800 mb-8">
            まずは小さく、深く。
          </h2>
          <p className="text-2xl text-gray-600 mb-12">
            参加に興味がある方は、直接ご相談ください。
          </p>
          <button className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-16 py-6 rounded-full text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-4">
            参加・相談してみる
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Brain className="w-10 h-10 mx-auto mb-6 text-[#FF9966]" />
          <p className="text-lg mb-2">自分の脳の取扱説明書 合宿</p>
          <p className="text-sm">役割を生きるための反応パターン診断</p>
        </div>
      </footer>
    </div>
  );
}
