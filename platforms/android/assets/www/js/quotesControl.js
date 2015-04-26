var quoteapp=angular.module('quotes', []);

quoteapp.controller('quotesController', function($scope) {
$scope.records=[
		{category:'nama',q:'A fire-lantern not only illuminates but also provides us heat, though unintended. A gas stove provides us light in addition to the heat that we intended to get out of it. Likewise, Namakirtan performed with worldly benefits in mind also leads us to salvation and Namakirtan performed with the intention of earning Salvation also brings in worldly comforts.'},
		{category:'krishna',q:'Joy and sorrow are the only two known states of mind as far as man is concerned. Divinity is to get past this dual state and be in a constant state of bliss'},
		{category:'krishna',q:'The path of Jnana is challenging and adventurous. Because of that itself, only few can taste success in that path. But the path of Bhakthi is lyrical and full of beauty. That is why it is recommended to all.'},
		{category:'nama',q:'Out of sheer compassion a Mahan who is in out-of-the-world state comes down to this physical plane and speaks to us. While this in itself is due to compassion one cannot expect any other kindness from him. Neither can He understand our (low) state nor can we comprehend his (high) state.'},
		{category:'krishna',q:'More than worrying that we uttered a wrong word, we should really be more concerned that we have in us the underlying vasana (tendency) that made us utter such a word. '},
		{category:'nama',q:'We like to wear dresses of varied colors; we like to eat different cuisines. The Lord being a ‘rasika’ also sports different forms and names in the same way. What is wrong with that? '},
		{category:'krishna',q:'G’ stands for Generator, ‘O’ for Operator and ‘D’ for Destroyer. GOOD has two ‘O’s ; When you think there are two Operators – one being the Almighty and the other being you, that is GOODNESS. When you realize that there is one and only one Operator – the Almighty, that is the state of GODLINESS.'},
		{category:'nama',q:'In Bhakti, only this same idea that the Lord is "mine" can nurture and nourish bhakti towards the Lord. Without this idea, the devotion still remains within banal limits.'},
		{category:'rama',q:'When one goes to a Guru, a lot of improvements happen in the material life. It is but a fraction of the benefits of the Guru`s grace. The most important benefit is the inner transformation which is effected within the devotee`s heart.'},
		{category:'nama',q:'When one commits a mistake, doesn`t he take utmost care and caution to ensure that it is not known to others? One should take similar care and caution to be totally inconspicuous when he does an act of public good.'},
		{category:'meditation',q:'Meditation and silence are inseparable. Meditation and fasting are inseparable. Meditation and solitude are inseparable.Above all, meditation and prayer are inseparable!'},
		{category:'charity',q:'In general, one accrues merits when he offers something in charity and not when they receive something from others. Whereas, one accrues merits both, while offering something to a Mahan as well as receiving something from them'},
		{category:'krishna',q:'To control the breath, mind and senses is Vedanta. To turn all the senses in the service of God or Guru is Bhakti'},
		{category:'nama',q:'Nama Kirtan has absolutely no restrictions. You can chant it with mala or without Mala. There are no prescribed procedures, no rules or regulations. Hence you can chant it any way, at any time and any place. '},
		{category:'nama',q:'The more you chant a Mantra, the quicker you realize its potency. From that perspective, one gets the unlimited privilege of chanting the Mahamantra anywhere and any time. So this mantra is alone enough to get liberation in the age of Kali. No need to confuse.'},
		{category:'krishna',q:'Truth is one. Lies are many'}
];
$scope.data1="";
var rec=$scope.records;
var tagMap = []; /* only having quotes in this array */
for (var i = 0; rec.length > i; i += 1) {
	tagMap[i] = rec[i].q;
}
$scope.goprev=function(){
		var ind=tagMap.indexOf($scope.data1.q);
		if(ind>0)
		{
			$scope.data1=rec[ind-1];
			if(ind-1==0)
			{
				$scope.lft=true;/*hiding left arrow when it shows first element*/
			}
			$scope.rgt=false;
		}
}
$scope.firRec=function(){
		$scope.data1=rec[0];
		$scope.lft=true;
}
$scope.gonext=function(){
		var ind=tagMap.indexOf($scope.data1.q);
		if(ind>-1&&ind<=rec.length-1){
			$scope.data1=rec[(ind+1)];
			if(ind+1==rec.length-1)
			{
				$scope.rgt=true;/*hiding right arrow when it shows last element*/
			}
			$scope.lft=false;
		}
}
});
