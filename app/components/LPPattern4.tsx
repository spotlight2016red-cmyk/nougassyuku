import { ImageWithFallback } from './ImageWithFallback';
import { Brain, ArrowRight, Sparkles, Zap } from 'lucide-react';
import brainDiagram from '../../imports/ChatGPT_Image_2026_5_21__12_50_33.png';

export function LPPattern4() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Dark & Modern */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FF9966] rounded-full blur-[128px] opacity-20" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#66BB6A] rounded-full blur-[128px] opacity-20" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#42A5F5] rounded-full blur-[128px] opacity-10 transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2.5 rounded-full border border-white/20">
                <Brain className="w-5 h-5 text-[#FF9966]" />
                <span className="text-sm text-gray-300">2026年6月 / 徳島県</span>
              </div>

              <div>
                <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                    自分の脳を知って
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF9966] via-[#FFB366] to-[#FF9966] bg-clip-text text-transparent">
                    アップデート
                  </span>
                </h1>

                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF9966] to-[#FFB366] blur-3xl opacity-60"></div>
                  <div className="relative bg-gradient-to-r from-[#FF9966]/20 to-[#FFB366]/20 backdrop-blur-xl px-10 py-5 rounded-2xl border border-[#FF9966]/40 shadow-[0_0_60px_rgba(255,153,102,0.4)]">
                    <p className="text-white text-3xl md:text-4xl font-bold">
                      通称ー脳合宿！
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl text-gray-300">
                  合宿を通じてあなただけの<br />
                  <span className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] bg-clip-text text-transparent font-medium">脳図鑑</span>を完成させます！
                </p>
              </div>

              <div className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <p className="text-2xl text-gray-200 leading-relaxed">
                  自分を<span className="line-through text-gray-500">責める</span>時間を、<br />
                  自分を<span className="text-[#FF9966] font-medium">知る</span>時間に変える。
                </p>
              </div>

              <button className="group bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-10 py-5 rounded-full text-lg shadow-[0_0_40px_rgba(255,153,102,0.4)] hover:shadow-[0_0_60px_rgba(255,153,102,0.6)] transition-all duration-300 inline-flex items-center gap-3">
                参加・相談してみる
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9966]/20 to-[#66BB6A]/20 blur-3xl" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-white/20 shadow-[0_0_80px_rgba(255,153,102,0.3)]">
                <img
                  src={brainDiagram}
                  alt="あなたの脳の取扱説明書"
                  className="w-full rounded-2xl"
                />
                <div className="mt-6 p-4 bg-gradient-to-r from-[#FF9966]/10 to-[#66BB6A]/10 rounded-xl border border-white/10 text-center">
                  <p className="text-gray-300">
                    合宿を通じて完成する、あなただけの取扱説明書
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-xs text-gray-500">SCROLL</p>
            <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* Empathy Section - Dark Cards */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-8">
            <div className="group bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-3xl border border-white/10 hover:border-[#FF9966]/50 transition-all hover:shadow-[0_0_40px_rgba(255,153,102,0.2)]">
              <p className="text-3xl text-gray-200 leading-relaxed">
                なぜ、ある言葉に強く反応してしまうのか。
              </p>
            </div>

            <div className="group bg-gradient-to-r from-gray-900 to-gray-800 p-10 rounded-3xl border border-white/10 hover:border-[#66BB6A]/50 transition-all hover:shadow-[0_0_40px_rgba(102,187,106,0.2)]">
              <p className="text-3xl text-gray-200 leading-relaxed">
                なぜ、ある環境では力が出るのに、別の環境では疲れてしまうのか。
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-12 rounded-3xl border border-white/20 shadow-[0_0_60px_rgba(255,153,102,0.15)]">
              <div className="text-center space-y-6">
                <p className="text-3xl text-gray-200">
                  それは性格や根性の問題ではなく、
                </p>
                <p className="text-5xl font-medium bg-gradient-to-r from-[#FF9966] via-[#FFB366] to-[#66BB6A] bg-clip-text text-transparent">
                  脳と身体の反応パターン
                </p>
                <p className="text-3xl text-gray-200">
                  かもしれません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Elements - Neon Cards */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-medium mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              4つの視点で見える、新しい自分
            </h2>
            <p className="text-xl text-gray-400">
              医療的な診断ではなく、自分を知るためのフレームワーク
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-[#66BB6A]/30 hover:border-[#66BB6A] transition-all hover:shadow-[0_0_60px_rgba(102,187,106,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#66BB6A]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#66BB6A]/20 to-[#66BB6A]/5 rounded-2xl flex items-center justify-center text-4xl border border-[#66BB6A]/30">
                    🧠
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">前頭前野</h3>
                    <p className="text-gray-400">考える司令塔</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">考える・整理する・選ぶ</p>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-gray-400">
                    思考や判断を司る部分。疲れると決断力が落ちます。
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-[#FF9966]/30 hover:border-[#FF9966] transition-all hover:shadow-[0_0_60px_rgba(255,153,102,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF9966]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FF9966]/20 to-[#FF9966]/5 rounded-2xl flex items-center justify-center text-4xl border border-[#FF9966]/30">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">扁桃体</h3>
                    <p className="text-gray-400">感情のアラーム</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">不安・怒り・違和感のセンサー</p>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-gray-400">
                    敏感さは「気づく力」。弱みではなく強みです。
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-[#42A5F5]/30 hover:border-[#42A5F5] transition-all hover:shadow-[0_0_60px_rgba(66,165,245,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#42A5F5]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#42A5F5]/20 to-[#42A5F5]/5 rounded-2xl flex items-center justify-center text-4xl border border-[#42A5F5]/30">
                    📖
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">海馬</h3>
                    <p className="text-gray-400">記憶の図書館</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">記憶・文脈・過去とのつながり</p>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-gray-400">
                    過去の経験が今の反応を作っています。
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-10 border border-[#FFB366]/30 hover:border-[#FFB366] transition-all hover:shadow-[0_0_60px_rgba(255,179,102,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB366]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#FFB366]/20 to-[#FFB366]/5 rounded-2xl flex items-center justify-center text-4xl border border-[#FFB366]/30">
                    💓
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-1">自律神経</h3>
                    <p className="text-gray-400">身体の自動運転</p>
                  </div>
                </div>
                <p className="text-lg text-gray-300 mb-4">戦う・逃げる・固まる・安心する</p>
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <p className="text-sm text-gray-400">
                    意識より先に動く、身体の反応システム。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps - Sleek Timeline */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-medium text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            5つのステップ
          </h2>

          <div className="space-y-6">
            {[
              { emoji: '✍️', title: '反応した出来事を書き出す', color: 'from-[#66BB6A]' },
              { emoji: '💭', title: '身体に起きた反応を見る', color: 'from-[#FF9966]' },
              { emoji: '🧩', title: '脳と身体の4要素に当てはめる', color: 'from-[#42A5F5]' },
              { emoji: '✨', title: '弱みを強みに言い換える', color: 'from-[#FFB366]' },
              { emoji: '📋', title: '自分の取扱説明書にまとめる', color: 'from-[#FF9966]' },
            ].map((step, idx) => (
              <div key={idx} className="group flex items-center gap-6 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} to-transparent rounded-2xl flex items-center justify-center text-4xl shadow-lg`}>
                  {step.emoji}
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1">STEP {idx + 1}</div>
                  <h3 className="text-2xl text-white">{step.title}</h3>
                </div>
                {idx < 4 && <ArrowRight className="w-8 h-8 text-gray-600 group-hover:text-gray-400 transition-colors" />}
                {idx === 4 && <Zap className="w-8 h-8 text-[#FFB366]" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Glass Morphism */}
      <section className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-medium text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            手に入るもの
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '🎯', title: '自分が反応しやすいことがわかる', glow: 'rgba(255,153,102,0.2)' },
              { emoji: '🗺️', title: '力が出る環境が整理できる', glow: 'rgba(102,187,106,0.2)' },
              { emoji: '💎', title: '弱みを強みに変換できる', glow: 'rgba(66,165,245,0.2)' },
              { emoji: '🌱', title: '自分に合う働き方がわかる', glow: 'rgba(255,179,102,0.2)' },
              { emoji: '🤝', title: '人間関係のヒントが見つかる', glow: 'rgba(255,153,102,0.2)' },
              { emoji: '📖', title: '自分の取扱説明書ができる', glow: 'rgba(102,187,106,0.2)' },
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-[0_0_40px_${item.glow}]">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <p className="text-xl text-gray-200 group-hover:text-white transition-colors">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details - Premium Cards */}
      <section className="py-32 bg-black">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-medium text-center mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            開催概要
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { emoji: '📅', label: '日程', value: '6月開催予定', color: 'from-[#66BB6A]/20' },
              { emoji: '📍', label: '場所', value: '徳島県内', color: 'from-[#FF9966]/20' },
              { emoji: '👥', label: '形式', value: '知り合い・紹介制のクローズド合宿', color: 'from-[#42A5F5]/20' },
              { emoji: '💰', label: '参加費', value: '15,000円〜30,000円', color: 'from-[#FFB366]/20' },
            ].map((item, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${item.color} to-transparent backdrop-blur-xl p-10 rounded-3xl border border-white/10 hover:border-white/30 transition-all`}>
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-lg text-gray-400 mb-2">{item.label}</h3>
                <p className="text-2xl text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-10 border border-white/20 text-center">
            <p className="text-xl text-gray-200">
              <Sparkles className="inline w-6 h-6 text-[#FFB366] mb-1" />
              {' '}少人数で安心して対話できる場にします{' '}
              <Sparkles className="inline w-6 h-6 text-[#FFB366] mb-1" />
            </p>
            <p className="text-sm text-gray-500 mt-4">宿泊費・食費は実費予定</p>
          </div>
        </div>
      </section>

      {/* CTA - Glowing */}
      <section className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF9966]/20 to-[#66BB6A]/20 blur-3xl" />
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-16 border border-white/20">
              <h2 className="text-5xl font-medium mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                まずは小さく、深く。
              </h2>
              <p className="text-xl text-gray-400 mb-12">
                参加に興味がある方は、直接ご相談ください。
              </p>
              <button className="group bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-16 py-6 rounded-full text-2xl shadow-[0_0_60px_rgba(255,153,102,0.5)] hover:shadow-[0_0_80px_rgba(255,153,102,0.7)] transition-all duration-300 inline-flex items-center gap-4">
                <Sparkles className="w-8 h-8" />
                参加・相談してみる
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Minimal Dark */}
      <footer className="bg-black border-t border-white/10 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-[#FF9966]" />
          </div>
          <p className="text-lg text-gray-300 mb-2">自分の脳の取扱説明書 合宿</p>
          <p className="text-sm text-gray-500">役割を生きるための反応パターン診断</p>
        </div>
      </footer>
    </div>
  );
}
