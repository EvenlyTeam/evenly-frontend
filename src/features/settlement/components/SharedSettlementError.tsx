import { Button } from '@/components';

import CloudOffIcon from '../assets/cloud-off.svg?react';

export function SharedSettlementError() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <div className="px-4 py-5.5 text-center">
        <p className="text-heading-md font-semibold text-primary">evenly</p>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="flex size-22 items-center justify-center rounded-full bg-surface shadow-card">
          <CloudOffIcon
            aria-hidden
            className="size-10 text-subtle-foreground"
          />
        </div>

        <h1 className="mt-5 text-heading-md font-semibold text-foreground">
          링크가 유효하지 않아요
        </h1>
        <p className="mt-2 text-body-md text-muted-foreground">
          만료되었거나 잘못된 링크예요.
          <br />
          링크를 다시 확인해주세요.
        </p>

        {/* @TODO: 라우터 도입 후 홈으로 이동 연결 */}
        <Button size="md" className="mt-6 px-6">
          evenly 시작하기 →
        </Button>
      </div>
    </div>
  );
}
