# Secure-and-private-MarketPlace
Market place, onde se utiliza blockchain e teoria dos jogos para manter a segurança e privacidade.


Atualmente um dos maiores problemas dos market places é a dificuldade em conciliar privacidade e segurança. Atualmente é quase impossível fazer transações seguras mantendo total privacidade. Pensando nisso me baseei na Bisq exchange decentralizada, para criar um marketplace que permitisse 100% de privacidade e uma boa taxa de segurança para os usuários.

A ideia é alinhar os incentivos dos compradores e vendedores para que seja mais benéfico não furar a transação do que o contrário. Isso aconteceria devido ao fato de antes de efetuar uma transação ambos os envolvidos devem depositar uma quantia de bitcoin que ficarão trancados como segurança até a transação ser bem sucedida. Os bitcoins só são liberados se ambos os agentes concordarem que a transação foi bem realizada. Caso o conflito exista um mediador enviado por uma DAO será responsável por julgar o caso e se nem mesmo ele conseguir solucionar a questão ambos perdem os bitcoins além de correrem o risco de serem mal avaliados dentro do marketplace, dificultando futuras negociações.

Na parte do código o ojetivo é codar toda o sistema, desde o rankeamento dos usuários até as transações dentro da rede do bitcoin. No momento estou desenvolvendo a estrutura para me conectar com a rede, quando essa parte estiver pronta é só implemtentar as regras de negócio.
