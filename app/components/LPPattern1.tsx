import { Brain, Map, Heart, Lightbulb, ArrowRight, Users, Sprout } from 'lucide-react';
import brainDiagram from '../../imports/ChatGPT_Image_2026_5_21__12_50_33.png';

export function LPPattern1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF5EB] to-[#F5F0E8]">
      {/* Hero Section - Visual First */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#FFE5D0] px-4 py-2 rounded-full">
                <Brain className="w-5 h-5 text-[#FF9966]" />
                <span className="text-sm text-gray-700">クローズド合宿</span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl text-gray-800 leading-tight mb-4 font-bold">
                  脳内アップデート合宿
                </h1>
                <p className="text-xl md:text-2xl text-[#FF9966] font-medium leading-relaxed">
                  〜自分を責める時間を、<br className="md:hidden" />
                  自分を知る時間に変える〜
                </p>
              </div>

              <div className="pt-4">
                <p className="text-xl text-gray-700">
                  合宿を通じてあなただけの<br />
                  <span className="text-[#FF9966] font-medium">脳図鑑</span>を完成させます！
                </p>
              </div>

              <button className="bg-[#FF9966] hover:bg-[#FF8850] text-white px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2">
                参加・相談してみる
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5D0]/30 to-[#E8F5E9]/30 blur-3xl" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 border-4 border-[#FFE5D0]">
                <img
                  src={brainDiagram}
                  alt="脳の構造図サンプル"
                  className="w-full h-auto"
                />
                <p className="text-center text-sm text-gray-500 mt-4">
                  ↑ こんな「自分の脳の取扱説明書」が手に入ります
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get - Big Visual */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FFF5EB]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
              合宿で手に入るもの
            </h2>
            <p className="text-xl text-gray-600">
              医療的な診断ではなく、自分の取扱説明書
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12">
            <img
              src={brainDiagram}
              alt="あなたの脳の取扱説明書"
              className="w-full max-w-3xl mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧠</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">前頭前野</h3>
              <p className="text-sm text-gray-600">考える・整理する・選ぶ</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#FFE5D0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚠️</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">扁桃体</h3>
              <p className="text-sm text-gray-600">不安・怒り・違和感のセンサー</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#E3F2FD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">海馬</h3>
              <p className="text-sm text-gray-600">記憶・文脈・過去とのつながり</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="w-16 h-16 bg-[#FFF3E0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💓</span>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">自律神経</h3>
              <p className="text-sm text-gray-600">戦う・逃げる・固まる・安心する</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8 text-center">
            <div className="space-y-4 text-lg text-gray-700">
              <p>なぜ、ある言葉に強く反応してしまうのか。</p>
              <p>なぜ、ある環境では力が出るのに、<br />別の環境では疲れてしまうのか。</p>
            </div>
            <div className="p-8 bg-gradient-to-r from-[#FFE5D0]/50 to-[#E8F5E9]/50 rounded-3xl">
              <p className="text-2xl text-gray-800 leading-relaxed">
                それは性格や根性の問題ではなく、<br />
                <span className="text-[#FF9966] font-medium text-3xl">脳と身体の反応パターン</span><br />
                かもしれません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Workshop Flow */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-16">
            5つのステップで自分を知る
          </h2>

          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-[#FF9966] to-[#66BB6A] transform -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  num: '1',
                  emoji: '✍️',
                  title: '反応した出来事を書き出す',
                  desc: '最近、心が揺れた場面を思い出します',
                  color: 'from-[#FFE5D0] to-[#FFB366]'
                },
                {
                  num: '2',
                  emoji: '💭',
                  title: '身体に起きた反応を見る',
                  desc: '胸が苦しくなった、頭が真っ白になった...身体の声を聞きます',
                  color: 'from-[#E8F5E9] to-[#66BB6A]'
                },
                {
                  num: '3',
                  emoji: '🧩',
                  title: '脳と身体の4要素に当てはめる',
                  desc: 'どの機能が働いていたのかを整理します',
                  color: 'from-[#E3F2FD] to-[#42A5F5]'
                },
                {
                  num: '4',
                  emoji: '✨',
                  title: '弱みを強みに言い換える',
                  desc: '「逃げたくなる」→「危険を察知する力」のように',
                  color: 'from-[#FFF3E0] to-[#FFB366]'
                },
                {
                  num: '5',
                  emoji: '📋',
                  title: '自分の取扱説明書にまとめる',
                  desc: 'これからの自分に渡すガイドブックを作ります',
                  color: 'from-[#FFE5D0] to-[#E8F5E9]'
                },
              ].map((step, idx) => (
                <div key={idx} className="relative">
                  <div className={`md:w-2/3 ${idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} bg-white rounded-3xl shadow-lg p-8 border-2 border-gray-100 hover:border-[#FF9966] transition-colors`}>
                    <div className="flex gap-6 items-start">
                      <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex flex-col items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                        <span className="text-3xl">{step.emoji}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-[#FF9966] mb-1">STEP {step.num}</div>
                        <h3 className="text-xl font-medium mb-2 text-gray-800">{step.title}</h3>
                        <p className="text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Complete */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">
              合宿で完成するもの
            </h2>
            <p className="text-xl md:text-2xl text-[#FF9966] font-medium">
              あなただけの「脳の取扱説明書」
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              合宿の最後には、<br className="hidden md:block" />
              自分の反応パターン・強み・疲れやすい状態・整え方をまとめた<br className="hidden md:block" />
              自分専用の取扱説明書をつくります。
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FFF5EB] to-[#F5F0E8] rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#FFE5D0]">
            <p className="text-center text-gray-600 mb-8">
              整理する内容は、たとえば以下です。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                '自分が強く反応しやすい言葉',
                '力が出る環境',
                '疲れやすい環境',
                '思考・感情・記憶・身体のクセ',
                '弱みだと思っていた強み',
                '自分を整える方法',
                '30日以内に試す一歩',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border-2 border-gray-100 hover:border-[#FF9966] transition-colors ${
                    idx === 6 ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full' : ''
                  }`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF9966] to-[#FFB366] rounded-xl flex items-center justify-center flex-shrink-0 text-white font-medium text-sm shadow-md">
                    {idx + 1}
                  </div>
                  <p className="text-gray-800 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-md border-2 border-[#FFE5D0]">
                <span className="text-3xl">📖</span>
                <p className="text-gray-700">
                  合宿後も何度でも見返せる、<span className="text-[#FF9966] font-medium">あなた専用のガイドブック</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-16">
            こんな変化が起きます
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🎯', title: '自分が反応しやすいことがわかる', desc: 'パターンが見えてきます' },
              { emoji: '🗺️', title: '力が出る環境が整理できる', desc: '合う・合わないの基準が明確に' },
              { emoji: '💎', title: '弱みを強みに変換できる', desc: '「敏感すぎる」が「気づく力」に' },
              { emoji: '🌱', title: '自分に合う働き方がわかる', desc: 'これからの選択に活かせる' },
              { emoji: '🤝', title: '人間関係のヒントが見つかる', desc: '距離感の取り方がわかる' },
              { emoji: '📖', title: '自分の取扱説明書ができる', desc: '何度も見返せるガイドブック' },
            ].map((item, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-[#FFF5EB] to-white rounded-3xl border-2 border-[#FFE5D0] hover:border-[#FF9966] transition-colors">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-lg font-medium mb-2 text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-16">
            こんな人におすすめ
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Sprout, text: '自分の得意や才能を見つめ直したい人', bg: 'bg-[#E8F5E9]', color: 'text-[#66BB6A]' },
              { icon: Heart, text: 'まじめに頑張ってきたけれど疲れている人', bg: 'bg-[#FFE5D0]', color: 'text-[#FF9966]' },
              { icon: Lightbulb, text: '人の言葉や空気に敏感な人', bg: 'bg-[#FFF3E0]', color: 'text-[#FFB366]' },
              { icon: Map, text: '自分に合う環境や働き方を考えたい人', bg: 'bg-[#E3F2FD]', color: 'text-[#42A5F5]' },
              { icon: ArrowRight, text: 'これからの方向性を整理したい人', bg: 'bg-[#E8F5E9]', color: 'text-[#66BB6A]' },
              { icon: Users, text: '少人数で安心して対話したい人', bg: 'bg-[#FFE5D0]', color: 'text-[#FF9966]' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border-2 border-gray-100">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <p className="text-gray-700 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-16">
            開催概要
          </h2>

          <div className="bg-gradient-to-br from-[#FFF5EB] to-[#F5F0E8] rounded-3xl shadow-xl p-8 md:p-12 border-4 border-[#FFE5D0]">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <span className="text-4xl">📅</span>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">日程</h3>
                  <p className="text-gray-600">6月末開催予定</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-4xl">📍</span>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">場所</h3>
                  <p className="text-gray-600">徳島県内</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-4xl">👤</span>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">人数</h3>
                  <p className="text-gray-600">3〜5名</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-4xl">🤝</span>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">形式</h3>
                  <p className="text-gray-600">知り合い・紹介制のクローズド合宿</p>
                </div>
              </div>

              <div className="flex gap-4 items-start md:col-span-2">
                <span className="text-4xl">💰</span>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">参加費</h3>
                  <p className="text-gray-700">
                    <span className="text-[#FF9966] font-bold text-xl">初回モニター価格：12,000円</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">※宿泊費・食費は実費</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/80 backdrop-blur rounded-2xl">
              <div className="flex gap-4 items-start">
                <span className="text-4xl">📋</span>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-800">内容</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    対話・ワーク・共同生活を通して、<br />
                    自分だけの「脳の取扱説明書」を作成します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-[#FFF5EB] to-[#F5F0E8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-6">
            まずは小さく、深く。
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            参加に興味がある方は、直接ご相談ください。
          </p>
          <button className="bg-gradient-to-r from-[#FF9966] to-[#FFB366] hover:from-[#FF8850] hover:to-[#FFA050] text-white px-12 py-5 rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3">
            参加・相談してみる
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Brain className="w-8 h-8 mx-auto mb-4 text-[#FF9966]" />
          <p className="text-sm">脳内アップデート合宿</p>
          <p className="text-xs mt-2 text-gray-400">〜自分を責める時間を、自分を知る時間に変える〜</p>
        </div>
      </footer>
    </div>
  );
}
