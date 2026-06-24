import { extendTailwindMerge } from 'tailwind-merge';

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // --text-* : 폰트 크기 토큰 → text-{color}와 충돌하지 않도록 "크기"로 명시
      'font-size': [
        {
          text: [
            'display',
            'heading-lg',
            'heading-md',
            'heading-sm',
            'body-lg',
            'body-md',
            'body-sm',
            'caption',
            'label',
          ],
        },
      ],
      // --container-* : max-w-content (1200px) — v4에서 container 네임스페이스가 max-w를 생성
      'max-w': [{ 'max-w': ['content'] }],
      // --radius-* : rounded-{name}
      rounded: [{ rounded: ['badge', 'button', 'input', 'card', 'modal'] }],
      // --shadow-* : box-shadow 토큰 → shadow-color로 오인되지 않도록 box-shadow 그룹에 등록
      shadow: [{ shadow: ['card', 'fab', 'sheet'] }],
    },
  },
});
