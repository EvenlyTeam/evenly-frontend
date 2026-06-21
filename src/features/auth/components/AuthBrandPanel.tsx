import CheckBadge from '../assets/icons/check-badge.svg?react';

export function AuthBrandPanel() {
  return (
    <div className="flex h-dvh w-full flex-col justify-between bg-primary px-14 py-13 text-on-primary">
      <div className="text-heading-lg">evenly</div>
      <div className="w-115">
        <div className="text-display">
          1분이면
          <br />
          정산 준비 끝
        </div>
        <div className="mt-4 text-body-lg leading-relaxed">
          계정을 만들고 첫 모임을 추가해보세요.
          <br />
          영수증 없이도 누가 얼마를 낼지 한눈에 정리돼요.
        </div>
        <div className="mt-9 flex flex-col gap-3.5">
          <div className="flex items-center space-x-3">
            <CheckBadge />
            <div className="text-body-lg">모임을 만들고 친구를 초대해요</div>
          </div>
          <div className="flex items-center space-x-3">
            <CheckBadge />
            <div className="text-body-lg">쓴 돈을 기록하면 자동으로 나눠요</div>
          </div>
          <div className="flex items-center space-x-3">
            <CheckBadge />
            <div className="text-body-lg">최소 송금 횟수로 정산하면 끝</div>
          </div>
        </div>
      </div>
    </div>
  );
}
