import 'tdesign-web-components/breadcrumb';

export default function Breadcrumb() {
  return (
    <t-breadcrumb max-item-width={'150'}>
      <t-breadcrumb-item> 页面1 </t-breadcrumb-item>
      <t-breadcrumb-item>页面2面包屑文案超长时悬浮显示文案全部信息</t-breadcrumb-item>
      <t-breadcrumb-item max-width={'160'}> 面包屑中文案过长时可缩略显示，鼠标hover时显示全部 </t-breadcrumb-item>
    </t-breadcrumb>
  );
}
