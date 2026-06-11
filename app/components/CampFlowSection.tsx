import { ArrowRight } from 'lucide-react';

type FlowStep = {
  title: string;
  body: string;
  highlights?: string[];
};

type FlowBlock = {
  id: string;
  label: string;
  subtitle: string;
  emoji: string;
  accent: string;
  intro?: string;
  steps?: FlowStep[];
  body?: string;
  highlights?: string[];
  featured?: boolean;
};

const FLOW_BLOCKS: FlowBlock[] = [
  {
    id: 'prep',
    label: '事前準備',
    subtitle: '合宿前',
    emoji: '📋',
    accent: 'from-[#E3F2FD] to-[#42A5F5]',
    body:
      '参加前に、簡単な診断フォームに回答していただきます。診断結果をもとに、当日は自分の特性や行動パターンを対話しながら深めていきます。',
  },
  {
    id: 'day1',
    label: '1日目｜自分を知る・人を知る',
    subtitle: 'Day 1',
    emoji: '🌅',
    accent: 'from-[#FFE5D0] to-[#FF9966]',
    steps: [
      {
        title: '集合・オープニング',
        body:
          'まずは、今回の合宿の目的や安心して話すためのルールを共有します。診断は「決めつけ」ではなく、自分を知るための材料として扱います。',
      },
      {
        title: '自己紹介',
        body:
          '今の自分のテーマや、今回の合宿で得たいことを話せる範囲で共有します。無理に深い話をする必要はありません。',
      },
      {
        title: '診断結果をもとにした対話ワーク',
        body:
          '事前診断の結果を見ながら、1人ずつ丁寧に対話していきます。本人の実感、周囲から見える印象、質問への反応などをもとに、自分の特徴や強み、疲れやすいパターンを整理します。他の参加者の分析を見ることで、自分との違いや共通点にも気づいていきます。',
      },
      {
        title: 'コーヒータイム・休憩',
        body:
          '一度ゆるめながら、感じたことをメモしたり、自然に対話したりする時間です。',
      },
      {
        title: '夕食準備・夕食',
        body:
          '一緒にご飯を準備しながら、場を和ませていきます。共同作業の中でも、自分の役割の取り方や人との関わり方が自然と見えてきます。',
      },
      {
        title: '夜の対話時間',
        body:
          'お酒もOKのリラックスした時間です。日中のワークでは出にくい本音や、これからの生き方・働き方について、自然に話せる時間を大切にします。',
      },
    ],
  },
  {
    id: 'day2',
    label: '2日目｜自分を活かす',
    subtitle: 'Day 2',
    emoji: '🌿',
    accent: 'from-[#E8F5E9] to-[#66BB6A]',
    steps: [
      {
        title: '朝の自由時間',
        body:
          '散歩、瞑想、ヨガ、日記、朝ごはんなど、それぞれのペースで朝を過ごします。自分がどう整うと調子が良いのかを感じる時間です。',
      },
      {
        title: '追加分析・フィードバック',
        body:
          '1日目の診断結果、対話、共同作業、夜の時間を踏まえて、さらに深めたフィードバックを行います。診断だけでは見えない、その人らしい反応や特性を立体的に整理していきます。',
        highlights: ['診断だけでは見えない'],
      },
      {
        title: '現実への活かし方',
        body:
          '見えてきた自分の特徴を、仕事・人間関係・日常生活にどう活かすかを話し合います。「自分はどんな環境で力を発揮しやすいのか」「どんな状態だと疲れやすいのか」「明日から何を意識するか」まで落とし込みます。',
      },
      {
        title: '現在地メモの作成',
        body:
          '合宿で見えた自分の特徴や、これから意識したいことを「現在地メモ」として整理します。完成版ではなく、今の自分を見える化するための記録です。',
        highlights: ['現在地メモ'],
      },
      {
        title: '振り返り・クロージング',
        body:
          '参加前と参加後での変化や気づきを共有します。合宿後は、LINEグループで2期生としてゆるくつながりながら、その後の変化も共有していきます。',
      },
    ],
  },
  {
    id: 'after',
    label: '後日のお渡し',
    subtitle: '合宿後',
    emoji: '📘',
    accent: 'from-[#FFF3E0] to-[#FFB366]',
    body:
      '合宿中の診断・対話・共同作業・フィードバックをもとに、後日あらためて「自分の脳の取扱説明書」として個別レポートをお渡しします。',
    highlights: ['自分の脳の取扱説明書'],
    featured: true,
  },
];

function HighlightText({ text, highlights = [] }: { text: string; highlights?: string[] }) {
  if (highlights.length === 0) {
    return <>{text}</>;
  }

  let parts: (string | JSX.Element)[] = [text];
  for (const word of highlights) {
    parts = parts.flatMap((part, index) => {
      if (typeof part !== 'string' || !part.includes(word)) return [part];
      const segments = part.split(word);
      return segments.flatMap((segment, i) =>
        i < segments.length - 1
          ? [segment, <strong key={`${word}-${index}-${i}`} className="text-[#FF9966] font-medium">{word}</strong>]
          : [segment],
      );
    });
  }

  return <>{parts}</>;
}

function FlowStepItem({ step, index, isLast }: { step: FlowStep; index: number; isLast: boolean }) {
  return (
    <div className="relative flex gap-4 md:gap-6">
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-[#FFF5EB] border-2 border-[#FFE5D0] text-[#FF9966] text-sm font-medium flex items-center justify-center">
          {index + 1}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-[#FFE5D0] mt-2 min-h-[1rem]" />}
      </div>
      <div className={`min-w-0 ${isLast ? 'pb-0' : 'pb-8'}`}>
        <h4 className="text-base md:text-lg font-medium text-gray-800 mb-2">{step.title}</h4>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed">
          <HighlightText text={step.body} highlights={step.highlights} />
        </p>
      </div>
    </div>
  );
}

export function CampFlowSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-800 mb-4">合宿の流れ</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            診断結果だけで人を決めつけるのではなく、
            <span className="text-[#FF9966] font-medium">対話・共同作業・生活の中で見える反応</span>
            も含めて、自分の特性を立体的に見ていきます。
          </p>
          <p className="text-base text-gray-500 mt-4 leading-relaxed">
            1日目は「自分を知る・人を知る」、2日目は「自分を活かす」時間です。
          </p>
        </div>

        <div className="space-y-8">
          {FLOW_BLOCKS.map((block) => (
            <article
              key={block.id}
              className={`rounded-3xl border-2 p-6 md:p-8 ${
                block.featured
                  ? 'bg-gradient-to-br from-[#FFF5EB] to-[#F5F0E8] border-[#FF9966] shadow-xl'
                  : 'bg-white border-[#FFE5D0] shadow-lg'
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${block.accent} rounded-xl flex items-center justify-center text-2xl shadow-md flex-shrink-0`}
                >
                  {block.emoji}
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-[#FF9966] font-medium mb-1">{block.subtitle}</p>
                  <h3 className="text-xl md:text-2xl font-medium text-gray-800 leading-snug">
                    {block.label}
                  </h3>
                </div>
              </div>

              {block.body && (
                <p
                  className={`leading-relaxed text-sm md:text-base ${
                    block.featured ? 'text-gray-800 text-base md:text-lg' : 'text-gray-700'
                  }`}
                >
                  <HighlightText text={block.body} highlights={block.highlights} />
                </p>
              )}

              {block.steps && (
                <div className="mt-6 md:mt-8">
                  {block.steps.map((step, index) => (
                    <FlowStepItem
                      key={step.title}
                      step={step}
                      index={index}
                      isLast={index === block.steps!.length - 1}
                    />
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-2 md:gap-3 text-gray-500 text-xs md:text-sm">
          <span className="font-medium text-[#42A5F5]">事前準備</span>
          <ArrowRight className="w-4 h-4 text-[#FF9966] flex-shrink-0" />
          <span className="font-medium text-[#FF9966]">1日目</span>
          <ArrowRight className="w-4 h-4 text-[#FF9966] flex-shrink-0" />
          <span className="font-medium text-[#66BB6A]">2日目</span>
          <ArrowRight className="w-4 h-4 text-[#FF9966] flex-shrink-0" />
          <span className="font-medium text-[#FFB366]">後日お渡し</span>
        </div>
      </div>
    </section>
  );
}
