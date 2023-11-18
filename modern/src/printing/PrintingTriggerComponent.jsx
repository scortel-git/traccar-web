import * as React from "react";
import ReactToPrint from "react-to-print";
import { Button, Container, CircularProgress, Backdrop } from '@mui/material';
import { PriorNotificationComponentToPrint } from "./components/PriorNotificationComponentToPrint";
import { CatchCertificateComponentToPrint } from "./components/CatchCertificateComponentToPrint";

export const PrintingTriggerComponent = ({document, data}) => {
  const componentRef = React.useRef(null);
  const onBeforeGetContentResolve = React.useRef(null);

  const [loading, setLoading] = React.useState(false);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
  }, []);

  const handleOnBeforeGetContent = React.useCallback(() => {
    console.log("`onBeforeGetContent` called");
    setLoading(true);

    return new Promise((resolve) => {
      onBeforeGetContentResolve.current = resolve;

      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 1000);
    });
  }, [setLoading]);

  const reactToPrintContent = React.useCallback(() => {
    return componentRef.current;
  }, [componentRef.current]);

  const reactToPrintTrigger = React.useCallback(() => {
    return <Button variant="outlined" size="small">Print</Button>
  }, []);

	const componentToPrint = () => {
    switch (document) {
      case 'prior':
        return <PriorNotificationComponentToPrint ref={componentRef} data={data} />
      case 'cert':
        return <CatchCertificateComponentToPrint ref={componentRef} data={data} />
      default:
        return <Container ref={componentRef}><div>No document to print specified.</div></Container>;
    }
  };

	const dosumentTitleConstruct = () => {
		const today = new Date();
		const month = today.getMonth() + 1;
		const year = today.getFullYear();
		const date = today.getDate();
		const dateString = `${date}_${month}_${year}`;
		switch (document) {
			case 'prior':
        return `prior_notification_${dateString}`
      case 'cert':
        return `catch_certificate_${dateString}`
      default:
        return `${dateString}`
		}
	}

  return (
    <div>
      <ReactToPrint
        content={reactToPrintContent}
        documentTitle={dosumentTitleConstruct()}
        onAfterPrint={handleAfterPrint}
        onBeforeGetContent={handleOnBeforeGetContent}
        onBeforePrint={handleBeforePrint}
        removeAfterPrint
        trigger={reactToPrintTrigger}
      />
      <Backdrop
        sx={{ color: '#fff' }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div style={{display: 'none'}}>
				{componentToPrint()}
      </div>
    </div>
  );
};
