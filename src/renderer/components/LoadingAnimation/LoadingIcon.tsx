// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import oktelLogo from '../../../assets/oktel-logo.png';

function LoadingIcon() {
    return (
        <div className='LoadingAnimation__compass'>
            <img
                src={oktelLogo}
                width={104}
                height={104}
                style={{objectFit: 'contain'}}
            />
        </div>
    );
}

export default LoadingIcon;
