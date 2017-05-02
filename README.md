# ngcs-hack
Este repositorio surge como un desarrollo de concepto para abordar una serie ideas de valor añadido para los clientes de Cloud Panel de NGCS.

Los dos desarrollos abordados han sido:
 - Un Dashboard como pantalla de inicio, en el que el cliente puede ver un resumen general con las principales estadísticas del panel actual.

 - Listados de elementos con selección múltiple. La idea es que el cliente pueda seleccioniar varios elementos sobre los que realizar una misma operación a la vez.

 La tercera idea de desarrollo se queda fuera del alcance por falta de tiempo.
  - Máquinas virtuales auto-escalables: El usuario puede definer reglas de auto-escalado para una de sus máquinas virtuales. Las reglas de auto-escalado no son más que unos límites virtuales de los recursos de su VM que una vez superados, desencadenan un aumento automático de recursos de la máquina (CPU, RAM, HDD). Es una manera de que un cliente nunca se quede corto de recursos sin necesidad de estar continuamente monitorizando su Virtual Machine.

  _Notas de interés:_
   - El proyecto usa el API público de Cloud Panel.
   - Actualemtne, la única información real en el Dashboard es el número del VMs, LBs, FWs y SSs.
   - Actualmente, la única operación implementada es RESTART de VM.
