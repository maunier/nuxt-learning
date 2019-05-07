export default function ({ redirect, route }) {
  console.log('*** route:', route);
  const playPageId = route.params.playPageId;
  console.log('playPageId:', playPageId)
  const isV = /^v_.+/.test(playPageId);
  console.log('isV:', isV);
  const isW = /^w_.+/.test(playPageId);

  if (isV) {
    return redirect('/adv/_vPlayPageId');
  }

  if (isW) {
    return redirect('/adv/:wPlayPageId');
  }

  return redirect('/404');
}