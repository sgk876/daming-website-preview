'use strict';
const faqSearch=document.querySelector('#faq-search');
const faqTopic=document.querySelector('#faq-topic');
const faqItems=[...document.querySelectorAll('#resource-faq details')];
function filterFAQ(){const query=faqSearch.value.trim().toLowerCase();const topic=faqTopic.value;let shown=0;for(const item of faqItems){const visible=(topic==='all'||item.dataset.topic===topic)&&item.textContent.toLowerCase().includes(query);item.hidden=!visible;if(visible)shown++;else item.open=false;}document.querySelector('#faq-count').textContent=`${shown} of ${faqItems.length} questions`;document.querySelector('#faq-empty').hidden=shown!==0;}
faqSearch.addEventListener('input',filterFAQ);faqTopic.addEventListener('change',filterFAQ);
