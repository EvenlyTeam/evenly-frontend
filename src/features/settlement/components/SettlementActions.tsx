import { Button } from '@/components';

import LinkIcon from '../assets/link.svg?react';

export function SettlementActions() {
  return (
    <>
      <Button size="md" className="w-full gap-2">
        <LinkIcon aria-hidden className="size-4.5" />
        공유 링크 복사
      </Button>

      <Button variant="secondary" size="md" className="w-full">
        정산 완료로 표시하기
      </Button>
    </>
  );
}
