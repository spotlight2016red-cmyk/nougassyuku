import { ImageWithFallback } from './ImageWithFallback';
import { Brain, ArrowRight, Sparkles } from 'lucide-react';
import brainDiagram from '../../imports/ChatGPT_Image_2026_5_21__12_50_33.png';

export function LPPattern3() {
  return (
    <div className="min-h-screen bg-[#FFF5EB]">
      {/* Playful Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFE5D0] rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#E8F5E9] rounded-full blur-3xl opacity-50" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#E3F2FD] rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full shadow-lg mb-8">
              <Sparkles className="w-5 h-5 text-[#FF9966]" />
              <span className="text-sm text-gray-700">6月開催のクローズド合宿</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-gray-800 mb-6 leading-tight">
              自分の脳を知って<br />
              <span className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] bg-clip-text text-transparent">アップデート</span>
            </h1>

            <div className="relative inline-block mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF9966] to-[#FFB366] blur-2xl opacity-60"></div>
              <div className="relative bg-gradient-to-r from-[#FF9966] to-[#FFB366] px-12 py-6 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform">
                <p className="text-white text-3xl md:text-5xl font-bold">
                  通称ー脳合宿！ 🧠✨
                </p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-2xl text-gray-700">
                合宿を通じてあなただけの<br />
                <span className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] bg-clip-text text-transparent font-medium">脳図鑑</span>を完成させます！
              </p>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              役割を生きるための反応パターン診断
            </p>

            <div className="inline-block bg-white/80 backdrop-blur px-8 py-4 rounded-2xl shadow-md">
              <p className="text-2xl md:text-3xl text-gray-800">
                自分を<span className="line-through text-gray-400">責める</span>時間を、<br />
                自分を<span className="text-[#FF9966] font-medium">知る</span>時間に変える。
              </p>
            </div>
          </div>

          {/* Big Visual Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-white">
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-[#FF9966] text-white px-6 py-3 rounded-full shadow-lg transform rotate-12">
                  <p className="text-sm font-medium">これが完成します！</p>
                </div>
                <img
                  src={brainDiagram}
                  alt="あなたの脳の取扱説明書サンプル"
                  className="w-full"
                />
              </div>
              <div className="mt-6 p-6 bg-gradient-to-r from-[#FFE5D0] to-[#E8F5E9] rounded-2xl text-center">
                <p className="text-lg text-gray-800">
                  あなただけの「脳の取扱説明書」が手に入ります
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-12 py-5 rounded-full text-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3">
                <Sparkles className="w-6 h-6" />
                参加・相談してみる
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Big Question Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#FFF5EB] to-[#FFE5D0] p-10 rounded-3xl shadow-lg transform hover:scale-105 transition-transform">
              <p className="text-3xl text-gray-800 leading-relaxed">
                😰 なぜ、ある言葉に強く反応してしまうのか。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-10 rounded-3xl shadow-lg transform hover:scale-105 transition-transform">
              <p className="text-3xl text-gray-800 leading-relaxed">
                🤔 なぜ、ある環境では力が出るのに、別の環境では疲れてしまうのか。
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB] p-10 rounded-3xl shadow-lg">
              <div className="text-center">
                <p className="text-4xl text-gray-800 leading-relaxed mb-4">
                  それは性格や根性の問題ではなく、
                </p>
                <p className="text-5xl font-medium bg-gradient-to-r from-[#FF9966] to-[#66BB6A] bg-clip-text text-transparent">
                  脳と身体の反応パターン
                </p>
                <p className="text-4xl text-gray-800 mt-4">
                  かもしれません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Elements - Card Style */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF5EB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-4">
              4つの視点で見える、新しい自分
            </h2>
            <p className="text-xl text-gray-600">
              医療的な診断ではなく、自分を知るためのフレームワーク
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-[#E8F5E9] hover:border-[#66BB6A] transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-[#E8F5E9] rounded-2xl flex items-center justify-center text-4xl">
                  🧠
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-800">前頭前野</h3>
                  <p className="text-gray-500">考える司令塔</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">考える・整理する・選ぶ</p>
              <div className="bg-[#E8F5E9]/30 p-4 rounded-xl">
                <p className="text-sm text-gray-600">
                  思考や判断を司る部分。疲れると決断力が落ちます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-[#FFE5D0] hover:border-[#FF9966] transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-[#FFE5D0] rounded-2xl flex items-center justify-center text-4xl">
                  ⚠️
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-800">扁桃体</h3>
                  <p className="text-gray-500">感情のアラーム</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">不安・怒り・違和感のセンサー</p>
              <div className="bg-[#FFE5D0]/30 p-4 rounded-xl">
                <p className="text-sm text-gray-600">
                  敏感さは「気づく力」。弱みではなく強みです。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-[#E3F2FD] hover:border-[#42A5F5] transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-[#E3F2FD] rounded-2xl flex items-center justify-center text-4xl">
                  📖
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-800">海馬</h3>
                  <p className="text-gray-500">記憶の図書館</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">記憶・文脈・過去とのつながり</p>
              <div className="bg-[#E3F2FD]/30 p-4 rounded-xl">
                <p className="text-sm text-gray-600">
                  過去の経験が今の反応を作っています。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-10 border-4 border-[#FFF3E0] hover:border-[#FFB366] transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-[#FFF3E0] rounded-2xl flex items-center justify-center text-4xl">
                  💓
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-800">自律神経</h3>
                  <p className="text-gray-500">身体の自動運転</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-4">戦う・逃げる・固まる・安心する</p>
              <div className="bg-[#FFF3E0]/30 p-4 rounded-xl">
                <p className="text-sm text-gray-600">
                  意識より先に動く、身体の反応システム。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Steps with Icons */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-16">
            5ステップで完成
          </h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { emoji: '✍️', title: '書き出す', desc: '反応した出来事' },
              { emoji: '💭', title: '観察する', desc: '身体の反応' },
              { emoji: '🧩', title: '当てはめる', desc: '4つの要素' },
              { emoji: '✨', title: '言い換える', desc: '弱み→強み' },
              { emoji: '📋', title: '完成！', desc: '取扱説明書' },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-full aspect-square rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 ${
                  idx === 0 ? 'bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9]' :
                  idx === 1 ? 'bg-gradient-to-br from-[#FFE5D0] to-[#FFCCBC]' :
                  idx === 2 ? 'bg-gradient-to-br from-[#E3F2FD] to-[#BBDEFB]' :
                  idx === 3 ? 'bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2]' :
                  'bg-gradient-to-br from-[#FFE5D0] to-[#E8F5E9]'
                }`}>
                  <div className="text-6xl mb-4">{step.emoji}</div>
                  <div className="text-sm text-gray-600 mb-2">STEP {idx + 1}</div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:flex items-center justify-center my-4">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Emoji Heavy */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-16">
            こんな変化が起きます
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '🎯', title: '自分が反応しやすいことがわかる' },
              { emoji: '🗺️', title: '力が出る環境が整理できる' },
              { emoji: '💎', title: '弱みを強みに変換できる' },
              { emoji: '🌱', title: '自分に合う働き方がわかる' },
              { emoji: '🤝', title: '人間関係のヒントが見つかる' },
              { emoji: '📖', title: '自分の取扱説明書ができる' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border-2 border-gray-100 hover:border-[#FF9966]">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <p className="text-xl text-gray-800">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-16">
            こんな人におすすめ
          </h2>

          <div className="space-y-4">
            {[
              '✅ 自分の得意や才能を見つめ直したい人',
              '✅ まじめに頑張ってきたけれど疲れている人',
              '✅ 人の言葉や空気に敏感な人',
              '✅ 自分に合う環境や働き方を考えたい人',
              '✅ これからの方向性を整理したい人',
            ].map((text, idx) => (
              <div key={idx} className="bg-gradient-to-r from-[#FFF5EB] to-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <p className="text-xl text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details - Colorful */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl text-center text-gray-800 mb-16">
            開催概要
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-[#E8F5E9]">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">日程</h3>
              <p className="text-2xl text-gray-700">6月開催予定</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-[#FFE5D0]">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">場所</h3>
              <p className="text-2xl text-gray-700">徳島県内</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-[#E3F2FD]">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">形式</h3>
              <p className="text-2xl text-gray-700">知り合い・紹介制のクローズド合宿</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 border-4 border-[#FFF3E0]">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-medium mb-2 text-gray-800">参加費</h3>
              <p className="text-2xl text-gray-700">15,000円〜30,000円</p>
              <p className="text-sm text-gray-500 mt-2">宿泊費・食費は実費予定</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#FFE5D0] via-[#E8F5E9] to-[#E3F2FD] rounded-3xl shadow-xl p-10 text-center">
            <p className="text-2xl text-gray-800">
              🌟 少人数で安心して対話できる場にします 🌟
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#FFF5EB] to-[#E8F5E9] rounded-3xl shadow-2xl p-12">
            <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
              まずは小さく、深く。
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              参加に興味がある方は、直接ご相談ください。
            </p>
            <button className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-16 py-6 rounded-full text-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-4">
              <Sparkles className="w-8 h-8" />
              参加・相談してみる
              <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="w-10 h-10 text-[#FF9966]" />
            <Sparkles className="w-6 h-6 text-[#FFB366]" />
          </div>
          <p className="text-lg mb-2">自分の脳の取扱説明書 合宿</p>
          <p className="text-sm text-gray-400">役割を生きるための反応パターン診断</p>
        </div>
      </footer>
    </div>
  );
}
